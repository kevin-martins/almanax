const fs = require('fs');

const fetchApiData = async (date) => {
    const res = await fetch(`https://alm.dofusdu.de/dofus/fr/${date}`)
    const data = await res.json()
    return data
}

const dateConverter = (date) => {
    const [day, month, year] = date.split(' ');
    const months = {
        'janvier': 0,
        'février': 1,
        'mars': 2,
        'avril': 3,
        'mai': 4,
        'juin': 5,
        'juillet': 6,
        'août': 7,
        'septembre': 8,
        'octobre': 9,
        'novembre': 10,
        'décembre': 11
    };
    const newDate = new Date(Date.UTC(parseInt(year) - 1, months[month], day));
    const formattedDate = newDate.toLocaleDateString('fr-FR');

    return formattedDate
}

fs.readFile('src/api/almanax.json', async (err, data) => {
    if (err) throw err;
    const parsedData = JSON.parse(data)

    const createNewAlmanaxApi = parsedData.map(async (almanax) => {
        return {
            ...almanax,
            date: dateConverter(almanax.date),
        }
        // if (almanax.icon.length > 0) return almanax;
        // const formattedDate = dateConverter(almanax.date)
        // const almanaxResponse = await fetchApiData(formattedDate)
        // try {
        //     return {
        //         ...almanax,
        //         icon: almanaxResponse.data.item.image_url,
        //     }
        // } catch (err) {
        //     return {
        //         ...almanax,
        //         icon: "",
        //     }
        // }
    })
    Promise.all(createNewAlmanaxApi)
        .then(res => {
            fs.appendFile('src/api/almanax.json', JSON.stringify(res, null, 2), { flag: 'w' }, (err) => {
                if (err) throw err;
                console.log('Api updated !');
            });
        })
});
