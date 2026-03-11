from web_flask import app
from flask import render_template
import json
import urllib.request
import urllib.error

# calling data json
url = "https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json"

datagempa = []
hasilfilter = []

try:
    req = urllib.request.Request(
        url,
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    )
    f = urllib.request.urlopen(req).read().decode()
    data = json.loads(f)  # serializing data json object
    data = data["Infogempa"]["gempa"]  # object

    for i in range(len(data)):
        gempa = dict()
        gempa['Tanggal'] = data[i]['Tanggal']
        gempa['Jam'] = data[i]['Jam']
        gempa['DateTime'] = data[i]['DateTime']
        gempa['Coordinates'] = data[i]['Coordinates']
        gempa['Lintang'] = data[i]['Lintang']
        gempa['Bujur'] = data[i]['Bujur']
        gempa['Magnitude'] = data[i]['Magnitude']
        gempa['Kedalaman'] = data[i]['Kedalaman']
        gempa['Wilayah'] = data[i]['Wilayah']
        gempa['Potensi'] = data[i]['Potensi']
        datagempa.append(gempa)
except urllib.error.HTTPError as e:
    print(f"Error fetching BMKG data: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")


# High Order Function: filter gempa magnitude >= 5.5
def filter(datagempa):
    filter_gempa = []
    for i in range(len(datagempa)):
        if float(datagempa[i]['Magnitude']) >= 5.5:
            filter_gempa.append(datagempa[i])
    return filter_gempa


hasilfilter = filter(datagempa)


# Helper: get max magnitude
def get_max_magnitude(data):
    if not data:
        return 0
    return max(float(d['Magnitude']) for d in data)


# Helper: build chart data for the graphic page
def build_chart_data(data):
    # Magnitude distribution
    mag_ranges = {'< 4.0': 0, '4.0 - 5.4': 0, '5.5 - 6.9': 0, '≥ 7.0': 0}
    for d in data:
        m = float(d['Magnitude'])
        if m < 4.0:
            mag_ranges['< 4.0'] += 1
        elif m < 5.5:
            mag_ranges['4.0 - 5.4'] += 1
        elif m < 7.0:
            mag_ranges['5.5 - 6.9'] += 1
        else:
            mag_ranges['≥ 7.0'] += 1

    # Regional count (top 8 regions)
    region_count = {}
    for d in data:
        # Extract a short region name from the full wilayah string
        wilayah = d['Wilayah']
        # Try to get the last part after the dash for a cleaner label
        parts = wilayah.split(' - ')
        short_name = parts[-1].strip() if len(parts) > 1 else wilayah
        # Shorten long names
        if len(short_name) > 25:
            short_name = short_name[:22] + '...'
        region_count[short_name] = region_count.get(short_name, 0) + 1
    # Sort and take top 8
    sorted_regions = sorted(region_count.items(), key=lambda x: x[1], reverse=True)[:8]

    # Depth distribution
    depth_ranges = {'0-30 km': 0, '31-70 km': 0, '71-150 km': 0, '> 150 km': 0}
    for d in data:
        depth_str = d['Kedalaman'].replace(' km', '').replace(' Km', '')
        try:
            depth = int(depth_str)
        except ValueError:
            continue
        if depth <= 30:
            depth_ranges['0-30 km'] += 1
        elif depth <= 70:
            depth_ranges['31-70 km'] += 1
        elif depth <= 150:
            depth_ranges['71-150 km'] += 1
        else:
            depth_ranges['> 150 km'] += 1

    # Potensi tsunami
    potensi_count = {'Tidak berpotensi tsunami': 0, 'Berpotensi tsunami': 0}
    for d in data:
        if 'tidak' in d['Potensi'].lower():
            potensi_count['Tidak berpotensi tsunami'] += 1
        else:
            potensi_count['Berpotensi tsunami'] += 1

    return {
        'mag_labels': list(mag_ranges.keys()),
        'mag_counts': list(mag_ranges.values()),
        'region_labels': [r[0] for r in sorted_regions],
        'region_counts': [r[1] for r in sorted_regions],
        'depth_labels': list(depth_ranges.keys()),
        'depth_counts': list(depth_ranges.values()),
        'potensi_labels': list(potensi_count.keys()),
        'potensi_counts': list(potensi_count.values()),
    }


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about')
def about():
    datakelompok = [
        {
            "gambar": "avatar5.png",
            "nim": "21102034",
            "nama": "Aditya Stiawan"
        },
        {
            "gambar": "wildan.png",
            "nim": "21102022",
            "nama": "Muhhamad Wildan Nugroho"
        },
        {
            "gambar": "avatar2.png",
            "nim": "2110202",
            "nama": "Bagus Mustaqiem Alfan Zulkarnain"
        }
    ]
    return render_template('about.html', len=len(datakelompok), datakelompok=datakelompok)


@app.route('/home')
def home():
    max_mag = get_max_magnitude(datagempa)
    return render_template('home.html', hasilfilter=hasilfilter, datagempa=datagempa, max_mag=max_mag)


@app.route('/graphic')
def graphic():
    chart_data = build_chart_data(datagempa)
    return render_template('graphic.html', chart_data=chart_data)
