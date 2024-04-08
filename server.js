const timetable = require('comcigan-parser')
const express = require('express')
const app = express()
app.listen(5050)
const _timetable = new timetable();

(async () => {
    await _timetable.init()
    await _timetable.search('국디')
    _timetable.setSchool(29175)
    app.get('/t', async (_req, _res) => {
        _res.setHeader('Access-Control-Allow-Origin', '*')
        _res.json((await _timetable.getTimetable())['2']['4'])
    })
})()