/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type LocalPlaceType = 'beach' | 'nature' | 'culture' | 'food' | 'town' | 'landmark' | 'island';

export interface LocalPlace {
  name: string;
  lat: number;
  lng: number;
  type: LocalPlaceType;
}

export const LOCAL_PLACES: Record<string, LocalPlace[]> = {
  paris: [
    { name: 'Montmartre', lat: 48.8867, lng: 2.3431, type: 'culture' },
    { name: 'Le Marais', lat: 48.8566, lng: 2.3589, type: 'culture' },
    { name: 'Eiffel Tower', lat: 48.8584, lng: 2.2945, type: 'landmark' },
    { name: 'Champs-Élysées', lat: 48.8698, lng: 2.3078, type: 'landmark' },
    { name: 'Saint-Germain', lat: 48.8536, lng: 2.3344, type: 'food' },
    { name: 'Versailles', lat: 48.8049, lng: 2.1204, type: 'landmark' },
  ],
  rome: [
    { name: 'Colosseum', lat: 41.8902, lng: 12.4922, type: 'landmark' },
    { name: 'Vatican City', lat: 41.9022, lng: 12.4539, type: 'culture' },
    { name: 'Trastevere', lat: 41.8888, lng: 12.4699, type: 'food' },
    { name: 'Trevi Fountain', lat: 41.9009, lng: 12.4833, type: 'landmark' },
    { name: 'Spanish Steps', lat: 41.9057, lng: 12.4826, type: 'landmark' },
    { name: 'Borghese Gallery', lat: 41.9142, lng: 12.4922, type: 'culture' },
  ],
  barcelona: [
    { name: 'Sagrada Família', lat: 41.4036, lng: 2.1744, type: 'landmark' },
    { name: 'Gothic Quarter', lat: 41.3832, lng: 2.1770, type: 'culture' },
    { name: 'Park Güell', lat: 41.4145, lng: 2.1527, type: 'nature' },
    { name: 'Barceloneta Beach', lat: 41.3793, lng: 2.1893, type: 'beach' },
    { name: 'El Born', lat: 41.3852, lng: 2.1834, type: 'food' },
    { name: 'Montjuïc', lat: 41.3641, lng: 2.1596, type: 'landmark' },
  ],
  amsterdam: [
    { name: 'Jordaan', lat: 52.3736, lng: 4.8810, type: 'culture' },
    { name: 'Anne Frank House', lat: 52.3752, lng: 4.8840, type: 'landmark' },
    { name: 'Vondelpark', lat: 52.3580, lng: 4.8686, type: 'nature' },
    { name: 'Rijksmuseum', lat: 52.3600, lng: 4.8852, type: 'culture' },
    { name: 'De Pijp', lat: 52.3542, lng: 4.8952, type: 'food' },
    { name: 'NDSM Wharf', lat: 52.4009, lng: 4.8888, type: 'culture' },
  ],
  prague: [
    { name: 'Old Town Square', lat: 50.0875, lng: 14.4213, type: 'landmark' },
    { name: 'Prague Castle', lat: 50.0903, lng: 14.4001, type: 'landmark' },
    { name: 'Josefov', lat: 50.0901, lng: 14.4181, type: 'culture' },
    { name: 'Vinohrady', lat: 50.0738, lng: 14.4376, type: 'food' },
    { name: 'Letná Park', lat: 50.0977, lng: 14.4195, type: 'nature' },
  ],
  santorini: [
    { name: 'Oia', lat: 36.4618, lng: 25.3753, type: 'town' },
    { name: 'Fira', lat: 36.4165, lng: 25.4321, type: 'town' },
    { name: 'Akrotiri', lat: 36.3520, lng: 25.4046, type: 'culture' },
    { name: 'Red Beach', lat: 36.3523, lng: 25.3922, type: 'beach' },
    { name: 'Perissa Beach', lat: 36.3602, lng: 25.4762, type: 'beach' },
    { name: 'Imerovigli', lat: 36.4328, lng: 25.4220, type: 'town' },
  ],
  lisbon: [
    { name: 'Alfama', lat: 38.7139, lng: -9.1307, type: 'culture' },
    { name: 'Belém Tower', lat: 38.6916, lng: -9.2160, type: 'landmark' },
    { name: 'Bairro Alto', lat: 38.7131, lng: -9.1469, type: 'food' },
    { name: 'LX Factory', lat: 38.7044, lng: -9.1786, type: 'culture' },
    { name: 'Sintra', lat: 38.7976, lng: -9.3895, type: 'landmark' },
  ],
  dubrovnik: [
    { name: 'Old City Walls', lat: 42.6421, lng: 18.1082, type: 'landmark' },
    { name: 'Lokrum Island', lat: 42.6279, lng: 18.1230, type: 'island' },
    { name: 'Stradun', lat: 42.6407, lng: 18.1077, type: 'culture' },
    { name: 'Buža Bar', lat: 42.6382, lng: 18.1071, type: 'food' },
    { name: 'Korčula', lat: 42.9601, lng: 17.1354, type: 'island' },
  ],
  edinburgh: [
    { name: 'Edinburgh Castle', lat: 55.9486, lng: -3.1999, type: 'landmark' },
    { name: 'Arthur\'s Seat', lat: 55.9445, lng: -3.1617, type: 'nature' },
    { name: 'Royal Mile', lat: 55.9488, lng: -3.1900, type: 'culture' },
    { name: 'Leith', lat: 55.9756, lng: -3.1746, type: 'food' },
    { name: 'Scottish Highlands', lat: 57.1200, lng: -4.7200, type: 'nature' },
  ],
  budapest: [
    { name: 'Buda Castle', lat: 47.4960, lng: 19.0399, type: 'landmark' },
    { name: 'Széchenyi Baths', lat: 47.5189, lng: 19.0823, type: 'culture' },
    { name: 'Ruin Bars', lat: 47.5021, lng: 19.0693, type: 'food' },
    { name: 'Fisherman\'s Bastion', lat: 47.5016, lng: 19.0343, type: 'landmark' },
    { name: 'Great Market Hall', lat: 47.4875, lng: 19.0600, type: 'food' },
  ],
  amalfi: [
    { name: 'Positano', lat: 40.6281, lng: 14.4851, type: 'town' },
    { name: 'Ravello', lat: 40.6488, lng: 14.6130, type: 'culture' },
    { name: 'Marina Grande', lat: 40.6341, lng: 14.6018, type: 'beach' },
    { name: 'Capri', lat: 40.5530, lng: 14.2428, type: 'island' },
    { name: 'Furore Fjord', lat: 40.6152, lng: 14.5419, type: 'nature' },
  ],
  tokyo: [
    { name: 'Shinjuku', lat: 35.6895, lng: 139.6917, type: 'town' },
    { name: 'Shibuya Crossing', lat: 35.6595, lng: 139.7005, type: 'culture' },
    { name: 'Asakusa', lat: 35.7148, lng: 139.7967, type: 'landmark' },
    { name: 'Harajuku', lat: 35.6702, lng: 139.7026, type: 'culture' },
    { name: 'Akihabara', lat: 35.7024, lng: 139.7745, type: 'culture' },
    { name: 'Odaiba', lat: 35.6267, lng: 139.7750, type: 'landmark' },
  ],
  kyoto: [
    { name: 'Arashiyama', lat: 35.0094, lng: 135.6729, type: 'nature' },
    { name: 'Fushimi Inari', lat: 34.9671, lng: 135.7727, type: 'landmark' },
    { name: 'Gion District', lat: 35.0038, lng: 135.7784, type: 'culture' },
    { name: 'Nijo Castle', lat: 35.0142, lng: 135.7482, type: 'landmark' },
    { name: "Philosopher's Path", lat: 35.0274, lng: 135.7958, type: 'nature' },
    { name: 'Kinkaku-ji', lat: 35.0394, lng: 135.7292, type: 'landmark' },
  ],
  bangkok: [
    { name: 'Grand Palace', lat: 13.7500, lng: 100.4913, type: 'landmark' },
    { name: 'Khao San Road', lat: 13.7588, lng: 100.4975, type: 'culture' },
    { name: 'Chatuchak Market', lat: 13.7999, lng: 100.5508, type: 'food' },
    { name: 'Wat Pho', lat: 13.7466, lng: 100.4927, type: 'landmark' },
    { name: 'Sukhumvit', lat: 13.7435, lng: 100.5538, type: 'town' },
    { name: 'Chinatown', lat: 13.7400, lng: 100.5080, type: 'food' },
  ],
  bali: [
    { name: 'Ubud', lat: -8.5069, lng: 115.2625, type: 'culture' },
    { name: 'Canggu', lat: -8.6478, lng: 115.1385, type: 'beach' },
    { name: 'Uluwatu', lat: -8.8291, lng: 115.0849, type: 'landmark' },
    { name: 'Seminyak', lat: -8.6923, lng: 115.1602, type: 'beach' },
    { name: 'Nusa Penida', lat: -8.7275, lng: 115.5444, type: 'island' },
    { name: 'Kuta Beach', lat: -8.7184, lng: 115.1686, type: 'beach' },
  ],
  istanbul: [
    { name: 'Hagia Sophia', lat: 41.0086, lng: 28.9802, type: 'landmark' },
    { name: 'Grand Bazaar', lat: 41.0107, lng: 28.9682, type: 'culture' },
    { name: 'Karaköy', lat: 41.0217, lng: 28.9763, type: 'food' },
    { name: 'Princes Islands', lat: 40.8746, lng: 29.0798, type: 'island' },
    { name: 'Bosphorus Strait', lat: 41.1082, lng: 29.0600, type: 'nature' },
    { name: 'Galata Tower', lat: 41.0256, lng: 28.9742, type: 'landmark' },
  ],
  singapore: [
    { name: 'Gardens by the Bay', lat: 1.2816, lng: 103.8636, type: 'nature' },
    { name: 'Chinatown', lat: 1.2837, lng: 103.8448, type: 'culture' },
    { name: 'Sentosa Island', lat: 1.2494, lng: 103.8303, type: 'island' },
    { name: 'Hawker Centres', lat: 1.3048, lng: 103.8318, type: 'food' },
    { name: 'Marina Bay', lat: 1.2838, lng: 103.8591, type: 'landmark' },
  ],
  dubai: [
    { name: 'Burj Khalifa', lat: 25.1972, lng: 55.2744, type: 'landmark' },
    { name: 'Dubai Marina', lat: 25.0805, lng: 55.1403, type: 'town' },
    { name: 'Palm Jumeirah', lat: 25.1121, lng: 55.1391, type: 'island' },
    { name: 'Gold Souk', lat: 25.2697, lng: 55.2975, type: 'culture' },
    { name: 'Desert Safari', lat: 24.9857, lng: 55.4272, type: 'nature' },
    { name: 'Al Fahidi District', lat: 25.2637, lng: 55.2967, type: 'culture' },
  ],
  'new-york': [
    { name: 'Central Park', lat: 40.7851, lng: -73.9683, type: 'nature' },
    { name: 'Brooklyn Bridge', lat: 40.7061, lng: -73.9969, type: 'landmark' },
    { name: 'Times Square', lat: 40.7580, lng: -73.9855, type: 'culture' },
    { name: 'SoHo', lat: 40.7231, lng: -74.0020, type: 'food' },
    { name: 'High Line', lat: 40.7480, lng: -74.0048, type: 'nature' },
    { name: 'MOMA', lat: 40.7614, lng: -73.9776, type: 'culture' },
  ],
  'machu-picchu': [
    { name: 'Sun Gate', lat: -13.5452, lng: -71.8750, type: 'landmark' },
    { name: 'Huayna Picchu', lat: -13.1576, lng: -72.5452, type: 'nature' },
    { name: 'Aguas Calientes', lat: -13.1543, lng: -72.5268, type: 'town' },
    { name: 'Inca Trail', lat: -13.3333, lng: -72.1667, type: 'nature' },
    { name: 'Sacred Valley', lat: -13.4167, lng: -71.9500, type: 'nature' },
  ],
  'rio-de-janeiro': [
    { name: 'Christ the Redeemer', lat: -22.9519, lng: -43.2105, type: 'landmark' },
    { name: 'Copacabana', lat: -22.9711, lng: -43.1822, type: 'beach' },
    { name: 'Ipanema', lat: -22.9839, lng: -43.2000, type: 'beach' },
    { name: 'Santa Teresa', lat: -22.9167, lng: -43.1833, type: 'culture' },
    { name: 'Sugarloaf Mountain', lat: -22.9487, lng: -43.1566, type: 'nature' },
  ],
  'cape-town': [
    { name: 'Table Mountain', lat: -33.9625, lng: 18.4036, type: 'nature' },
    { name: 'Camps Bay', lat: -33.9487, lng: 18.3755, type: 'beach' },
    { name: 'V&A Waterfront', lat: -33.9031, lng: 18.4230, type: 'town' },
    { name: 'Boulders Beach', lat: -34.1965, lng: 18.4523, type: 'nature' },
    { name: 'Bo-Kaap', lat: -33.9229, lng: 18.4148, type: 'culture' },
    { name: 'Cape Point', lat: -34.3568, lng: 18.4987, type: 'nature' },
  ],
  marrakech: [
    { name: 'Djemaa el-Fna', lat: 31.6252, lng: -7.9892, type: 'culture' },
    { name: 'Majorelle Garden', lat: 31.6415, lng: -8.0126, type: 'nature' },
    { name: 'Bahia Palace', lat: 31.6213, lng: -7.9833, type: 'landmark' },
    { name: 'Souk Medina', lat: 31.6318, lng: -7.9862, type: 'food' },
    { name: 'Agafay Desert', lat: 31.5228, lng: -8.1792, type: 'nature' },
  ],
  sydney: [
    { name: 'Opera House', lat: -33.8568, lng: 151.2153, type: 'landmark' },
    { name: 'Bondi Beach', lat: -33.8916, lng: 151.2767, type: 'beach' },
    { name: 'Manly', lat: -33.7969, lng: 151.2878, type: 'beach' },
    { name: 'The Rocks', lat: -33.8599, lng: 151.2090, type: 'culture' },
    { name: 'Harbour Bridge', lat: -33.8523, lng: 151.2108, type: 'landmark' },
    { name: 'Blue Mountains', lat: -33.7166, lng: 150.3111, type: 'nature' },
  ],
  queenstown: [
    { name: 'Skyline Gondola', lat: -45.0190, lng: 168.6740, type: 'nature' },
    { name: 'Milford Sound', lat: -44.6704, lng: 167.9249, type: 'nature' },
    { name: 'Arrowtown', lat: -44.9378, lng: 168.8310, type: 'town' },
    { name: 'The Remarkables', lat: -45.1100, lng: 168.7822, type: 'nature' },
    { name: 'Glenorchy', lat: -44.8500, lng: 168.3833, type: 'nature' },
  ],
  phuket: [
    { name: 'Patong Beach', lat: 7.8956, lng: 98.2973, type: 'beach' },
    { name: 'Kata Beach', lat: 7.8194, lng: 98.2969, type: 'beach' },
    { name: 'Phi Phi Islands', lat: 7.7407, lng: 98.7784, type: 'island' },
    { name: 'Old Town Phuket', lat: 7.8804, lng: 98.3923, type: 'culture' },
    { name: 'Phang Nga Bay', lat: 8.2765, lng: 98.5022, type: 'nature' },
    { name: 'Big Buddha', lat: 7.8272, lng: 98.3090, type: 'landmark' },
  ],
  hanoi: [
    { name: 'Old Quarter', lat: 21.0339, lng: 105.8497, type: 'culture' },
    { name: "Hoan Kiem Lake", lat: 21.0285, lng: 105.8524, type: 'nature' },
    { name: 'Ha Long Bay', lat: 20.9101, lng: 107.1839, type: 'nature' },
    { name: 'Temple of Literature', lat: 21.0274, lng: 105.8356, type: 'landmark' },
    { name: 'Train Street', lat: 21.0350, lng: 105.8473, type: 'culture' },
  ],
  cairo: [
    { name: 'Pyramids of Giza', lat: 29.9792, lng: 31.1342, type: 'landmark' },
    { name: 'Khan el-Khalili', lat: 30.0478, lng: 31.2628, type: 'culture' },
    { name: 'Egyptian Museum', lat: 30.0478, lng: 31.2337, type: 'culture' },
    { name: 'Coptic Cairo', lat: 30.0063, lng: 31.2296, type: 'landmark' },
    { name: 'Al-Azhar Park', lat: 30.0397, lng: 31.2703, type: 'nature' },
  ],
  zanzibar: [
    { name: 'Stone Town', lat: -6.1659, lng: 39.1981, type: 'culture' },
    { name: 'Nungwi Beach', lat: -5.7225, lng: 39.2966, type: 'beach' },
    { name: 'Paje Beach', lat: -6.2723, lng: 39.5240, type: 'beach' },
    { name: 'Jozani Forest', lat: -6.2901, lng: 39.3937, type: 'nature' },
    { name: 'Prison Island', lat: -6.1219, lng: 39.1751, type: 'island' },
  ],
};

export const LOCAL_PLACE_COLORS: Record<LocalPlaceType, string> = {
  beach: '#3B82F6',
  nature: '#22C55E',
  culture: '#A855F7',
  food: '#F97316',
  town: '#6B7280',
  landmark: '#EF4444',
  island: '#06B6D4',
};
