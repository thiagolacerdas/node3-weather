const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c0b55a70d4a9259f72f670acfded8b10&query=' + latitude + ',' + longitude
    request({ url , json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            const weatherDescription = body.current.weather_descriptions[0]
            callback(undefined, weatherDescription + '. It is currently ' + temperature + 
            ' degrees out. It feels like ' + feelslike + ' degrees out.')    
        }
    })
}

module.exports = forecast