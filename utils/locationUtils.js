/*eslint-disable*/
exports.haversineDistance = (lon1, lat1, lon2, lat2) => {
    const toRadian = (angle) => (Math.PI / 180) * angle;
    const distance = (a, b) => (Math.PI / 180) * (a - b);
    const RADIUS_OF_EARTH_IN_KM = 6371;
    
    if (!lat2 || !lon2 || !lat1 || !lon1) {
      return {error: true, msg: 'Arguments missing.', details: {
          lat1,
          lon1,
          lat2,
          lon2
      }};
    }
    
    const dLat = distance(lat2, lat1);
    const dLon = distance(lon2, lon1);
    
    lat1 = toRadian(lat1);
    lat2 = toRadian(lat2);
    
    // Haversine Formula
    const a = Math.pow(Math.sin(dLat / 2), 2)
      + Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.asin(Math.sqrt(a));
    
    const finalDistance = Math.round(RADIUS_OF_EARTH_IN_KM * c * 1000);
    return finalDistance;
}
