const express = require('express');

const router = express.Router();

const menus = [
    {
        name:"Təbiət",
        slug:"/tebiet"
    },
    {
        name:"Tarix",
        slug:"/tarix"
    },
    {
        name:"İqtisadiyyat",
        slug:"/iqtisadiyyat",
        dropdowns:["Sənaye","Tikinti","Nəqliyyat","Rabitə","Energetika","Kənd Təsərrüfatı","Bank maliyyə sektoru"]
    },
    {
        name:"Mədəniyyət",
        slug:"/medeniyyet",
        dropdowns:["Tarixi abideler","Teatrlar","Muzeyler","Kitabxanalar","Tuzirm","Otel","Musiqi","Xalq Cagri aletleri","Milli reqsler","Milli metbex"]

    },
    {
        name:"Elm və Təhsil",
        slug:"/elm-tehsil"
    },
    {
        name:"Səhiyyə",
        slug:"/sehiyye"
    },

]

router.get('/', function(req, res) {
    res.render('front/index',{
        title:"Ana Səhifə",
        menus
    })
})

router.get('/tarix', function(req, res) {
    res.render('front/history',{
        title:"Tarix",
        menus
    })
})

module.exports = router