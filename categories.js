const categories = {
    'General Clothes': {
        tr: 'Genel Kıyafetler',
        items: [
            { name: {en: 'T-Shirt', tr: 'Tişört'}, emoji: '👕' },
            { name: {en: 'Pants', tr: 'Pantolon'}, emoji: '👖' },
            { name: {en: 'Dress', tr: 'Elbise'}, emoji: '👗' },
            { name: {en: 'Jacket', tr: 'Ceket'}, emoji: '🧥' },
            { name: {en: 'Sweater', tr: 'Kazak'}, emoji: '🧶' },
            { name: {en: 'Underwear', tr: 'İç Çamaşırı'}, emoji: '🩲' },
            { name: {en: 'Socks', tr: 'Çorap'}, emoji: '🧦' },
            { name: {en: 'Shoes', tr: 'Ayakkabı'}, emoji: '👟' },
            { name: {en: 'Pyjamas', tr: 'Pijama'}, emoji: '🛌' },
            { name: {en: 'Shorts', tr: 'Şort'}, emoji: '🩳' },
            { name: {en: 'Hoodie', tr: 'Kapşonlu'}, emoji: '🧥' },
            { name: {en: 'Raincoat', tr: 'Yağmurluk'}, emoji: '🧥' }
        ]
    },
    'Summer & Beach Escape': {
        tr: 'Yaz & Plaj Tatili',
        items: [
            { name: {en: 'Swimsuit', tr: 'Mayo'}, emoji: '🩱' },
            { name: {en: 'Swim Trunks', tr: 'Deniz Şortu'}, emoji: '🩳' },
            { name: {en: 'Flip-flops', tr: 'Parmak Arası Terlik'}, emoji: '🩴' },
            { name: {en: 'Beach Towel', tr: 'Plaj Havlusu'}, emoji: '🏖️' },
            { name: {en: 'Sun Hat', tr: 'Güneş Şapkası'}, emoji: '🧢' },
            { name: {en: 'Sunglasses', tr: 'Güneş Gözlüğü'}, emoji: '🕶️' },
            { name: {en: 'Beach Bag', tr: 'Plaj Çantası'}, emoji: '👜' },
            { name: {en: 'Snorkel Set', tr: 'Şnorkel Seti'}, emoji: '🤿' },
            { name: {en: 'Water Shoes', tr: 'Deniz Ayakkabısı'}, emoji: '👟' },
            { name: {en: 'Sarong', tr: 'Pareo'}, emoji: '👗' }
        ]
    },
    'Winter & Ski Trip': {
        tr: 'Kış & Kayak Gezisi',
        items: [
            { name: {en: 'Winter Coat', tr: 'Kış Montu'}, emoji: '🧥' },
            { name: {en: 'Snow Boots', tr: 'Kar Botu'}, emoji: '🥾' },
            { name: {en: 'Gloves', tr: 'Eldiven'}, emoji: '🧤' },
            { name: {en: 'Scarf', tr: 'Atkı'}, emoji: '🧣' },
            { name: {en: 'Beanie', tr: 'Bere'}, emoji: '🎩' },
            { name: {en: 'Thermal Wear', tr: 'Termal İçlik'}, emoji: '🩲' },
            { name: {en: 'Ski Goggles', tr: 'Kayak Gözlüğü'}, emoji: '🥽' },
            { name: {en: 'Hand Warmers', tr: 'El Isıtıcısı'}, emoji: '🔥' },
            { name: {en: 'Waterproof Pants', tr: 'Su Geçirmez Pantolon'}, emoji: '👖' }
        ]
    },
    'Personal Care': {
        tr: 'Kişisel Bakım',
        items: [
            { name: {en: 'Toothbrush', tr: 'Diş Fırçası'}, emoji: '🪥' },
            { name: {en: 'Toothpaste', tr: 'Diş Macunu'}, emoji: '🦷' },
            { name: {en: 'Shampoo', tr: 'Şampuan'}, emoji: '🧴' },
            { name: {en: 'Conditioner', tr: 'Saç Kremi'}, emoji: '🧴' },
            { name: {en: 'Soap', tr: 'Sabun'}, emoji: '🧼' },
            { name: {en: 'Razor', tr: 'Tıraş Bıçağı'}, emoji: '🪒' },
            { name: {en: 'Deodorant', tr: 'Deodorant'}, emoji: '💨' },
            { name: {en: 'Perfume', tr: 'Parfüm'}, emoji: '🌸' },
            { name: {en: 'Makeup', tr: 'Makyaj Malzemesi'}, emoji: '💄' },
            { name: {en: 'Sunscreen', tr: 'Güneş Kremi'}, emoji: '☀️' },
            { name: {en: 'Tissues', tr: 'Peçete'}, emoji: '🧻' },
            { name: {en: 'Moisturizer', tr: 'Nemlendirici'}, emoji: '🧴' },
            { name: {en: 'Lip Balm', tr: 'Dudak Kremi'}, emoji: '👄' },
            { name: {en: 'Floss', tr: 'Diş İpi'}, emoji: '🧵' },
            { name: {en: 'Nail Clippers', tr: 'Tırnak Makası'}, emoji: '✂️' },
            { name: {en: 'Hair Ties',  tr: 'Saç Tokası' },emoji: '🎀', }
        ]
    },
    'Electronics': {
        tr: 'Elektronik',
        items: [
            { name: {en: 'Phone', tr: 'Telefon'}, emoji: '📱' },
            { name: {en: 'Charger', tr: 'Şarj Aleti'}, emoji: '🔌' },
            { name: {en: 'Laptop', tr: 'Bilgisayar'}, emoji: '💻' },
            { name: {en: 'Headphones', tr: 'Kulaklık'}, emoji: '🎧' },
            { name: {en: 'Camera', tr: 'Kamera'}, emoji: '📷' },
            { name: {en: 'Power Bank', tr: 'Taşınabilir Şarj'}, emoji: '🔋' },
            { name: {en: 'Adapter', tr: 'Adaptör'}, emoji: '🔌' },
            { name: {en: 'Tablet', tr: 'Tablet'}, emoji: '📱' },
            { name: {en: 'E-Reader', tr: 'E-Kitap Okuyucu'}, emoji: '📖' },
            { name: {en: 'Smartwatch', tr: 'Akıllı Saat'}, emoji: '⌚' },
            { name: {en: 'SD Cards', tr: 'Hafıza Kartı'}, emoji: '💾' },
            { name: {en: 'Mouse', tr: 'Fare'}, emoji: '🖱️' }
        ]
    },
    'Documents & Finance': {
        tr: 'Belgeler & Finans',
        items: [
            { name: {en: 'Passport', tr: 'Pasaport'}, emoji: '📕' },
            { name: {en: 'ID Card', tr: 'Kimlik'}, emoji: '🪪' },
            { name: {en: 'Tickets', tr: 'Biletler'}, emoji: '🎫' },
            { name: {en: 'Visa', tr: 'Vize'}, emoji: '📄' },
            { name: {en: 'Insurance', tr: 'Sigorta'}, emoji: '📋' },
            { name: {en: 'Maps', tr: 'Haritalar'}, emoji: '🗺️' },
            { name: {en: 'Credit Cards', tr: 'Kredi Kartları'}, emoji: '💳' },
            { name: {en: 'Cash', tr: 'Nakit Para'}, emoji: '💵' },
            { name: {en: 'Boarding Pass', tr: 'Uçuş Kartı'}, emoji: '✈️' },
            { name: {en: 'Hotel Reservation', tr: 'Otel Rezervasyonu'}, emoji: '🏨' },
            { name: {en: 'Driver License', tr: 'Ehliyet'}, emoji: '🪪' }
        ]
    },
    'Health & Pharmacy': {
        tr: 'Sağlık & Eczane',
        items: [
            { name: {en: 'Medicine', tr: 'İlaçlar'}, emoji: '💊' },
            { name: {en: 'First Aid', tr: 'İlk Yardım'}, emoji: '🩹' },
            { name: {en: 'Vitamins', tr: 'Vitaminler'}, emoji: '💊' },
            { name: {en: 'Hand Sanitizer', tr: 'El Dezenfektanı'}, emoji: '🧴' },
            { name: {en: 'Face Mask', tr: 'Maske'}, emoji: '😷' },
            { name: {en: 'Thermometer', tr: 'Ateş Ölçer'}, emoji: '🌡️' },
            { name: {en: 'Pain Relief', tr: 'Ağrı Kesici'}, emoji: '💊' },
            { name: {en: 'Bandages', tr: 'Yara Bandı'}, emoji: '🩹' },
            { name: {en: 'Glasses', tr: 'Gözlük'}, emoji: '👓' },
            { name: {en: 'Contacts', tr: 'Lens'}, emoji: '👁️' },
            { name: {en: 'Allergy Meds', tr: 'Alerji İlacı'}, emoji: '🤧' },
            { name: {en: 'Antiseptic', tr: 'Antiseptik'}, emoji: '🧴' }
        ]
    },
    'Food & Drink': {
        tr: 'Yiyecek & İçecek',
        items: [
            { name: {en: 'Water Bottle', tr: 'Su Şişesi'}, emoji: '💧' },
            { name: {en: 'Snacks', tr: 'Atıştırmalıklar'}, emoji: '🍪' },
            { name: {en: 'Coffee', tr: 'Kahve'}, emoji: '☕' },
            { name: {en: 'Thermos', tr: 'Termos'}, emoji: '🥤' },
            { name: {en: 'Gum', tr: 'Sakız'}, emoji: '🍬' },
            { name: {en: 'Protein Bars', tr: 'Protein Bar'}, emoji: '🍫' },
            { name: {en: 'Tea Bags', tr: 'Poşet Çay'}, emoji: '🍵' }
        ]
    },
    'Travel Comfort': {
        tr: 'Seyahat Konforu',
        items: [
            { name: {en: 'Pillow', tr: 'Yastık'}, emoji: '💤' },
            { name: {en: 'Blanket', tr: 'Battaniye'}, emoji: '🛋️' },
            { name: {en: 'Eye Mask', tr: 'Göz Maskesi'}, emoji: '😴' },
            { name: {en: 'Ear Plugs', tr: 'Kulak Tıkacı'}, emoji: '👂' },
            { name: {en: 'Book', tr: 'Kitap'}, emoji: '📚' },
            { name: {en: 'Journal', tr: 'Günlük'}, emoji: '📓' },
            { name: {en: 'Pen', tr: 'Kalem'}, emoji: '🖊️' },
            { name: {en: 'Slippers', tr: 'Terlik'}, emoji: '👟' }
        ]
    },
    'Outdoor & Adventure': {
        tr: 'Açık Hava & Macera',
        items: [
            { name: {en: 'Flashlight', tr: 'El Feneri'}, emoji: '🔦' },
            { name: {en: 'Compass', tr: 'Pusula'}, emoji: '🧭' },
            { name: {en: 'Bug Spray', tr: 'Sinek Kovucu'}, emoji: '🦟' },
            { name: {en: 'Swiss Knife', tr: 'Çakı'}, emoji: '🔪' },
            { name: {en: 'Waterproof Bag', tr: 'Su Geçirmez Çanta'}, emoji: '☔' },
            { name: {en: 'Hiking Boots', tr: 'Doğa Botu'}, emoji: '🥾' },
            { name: {en: 'Binoculars', tr: 'Dürbün'}, emoji: '🔭' },
            { name: {en: 'Headlamp', tr: 'Kafa Lambası'}, emoji: '🔦' },
            { name: {en: 'Whistle', tr: 'Düdük'}, emoji: '😙' }
        ]
    },
    'Miscellaneous': {
        tr: 'Çeşitli',
        items: [
            { name: {en: 'Keys', tr: 'Anahtarlar'}, emoji: '🔑' },
            { name: {en: 'Lock', tr: 'Asma Kilit'}, emoji: '🔒' },
            { name: {en: 'Bag Tags', tr: 'Bavul Etiketi'}, emoji: '🏷️' },
            { name: {en: 'Plastic Bags', tr: 'Poşet'}, emoji: '🛍️' },
            { name: {en: 'Laundry Bag', tr: 'Kirli Torbası'}, emoji: '👕' },
            { name: {en: 'Sewing Kit', tr: 'Dikiş Seti'}, emoji: '🧵' },
            { name: {en: 'Zip Ties', tr: 'Kablo Bağı'}, emoji: '🔗' },
            { name: {en: 'Duct Tape', tr: 'Koli Bandı'}, emoji: '📦' },
            { name: {en: 'Safety Pins', tr: 'Çengelli İğne'}, emoji: '🧷' },
            { name: {en: 'Lint Roller', tr: 'Tüy Toplayıcı'}, emoji: '🧹' }
        ]
    }
};