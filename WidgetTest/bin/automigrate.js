var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.accountDS;
ds.automigrate('Account', function(err) {
  if (err) throw err;

  var accounts = [
    {Reading:"86",Machine:"22",attribute:"position"},{Reading:"64",Machine:"31",attribute:"position"},{Reading:"2",Machine:"40",attribute:"position"},{Reading:"89",Machine:"43",attribute:"position"},{Reading:"19",Machine:"53",attribute:"position"},{Reading:"48",Machine:"56",attribute:"position"},{Reading:"55",Machine:"63",attribute:"position"},{Reading:"40",Machine:"67",attribute:"position"},{Reading:"23",Machine:"72",attribute:"position"},{Reading:"99",Machine:"74",attribute:"position"},{Reading:"14",Machine:"80",attribute:"position"},{Reading:"19",Machine:"88",attribute:"position"},{Reading:"62",Machine:"98",attribute:"position"},{Reading:"11",Machine:"103",attribute:"position"},{Reading:"45",Machine:"108",attribute:"position"},{Reading:"44",Machine:"114",attribute:"position"},{Reading:"74",Machine:"122",attribute:"position"},{Reading:"15",Machine:"124",attribute:"position"},{Reading:"62",Machine:"125",attribute:"position"},{Reading:"109.44",Machine:"22",attribute:"Closing time"},{Reading:"54.7",Machine:"31",attribute:"Closing time"},{Reading:"29.59",Machine:"40",attribute:"Closing time"},{Reading:"22.88",Machine:"43",attribute:"Closing time"},{Reading:"1.34",Machine:"53",attribute:"Closing time"},{Reading:"91.34",Machine:"56",attribute:"Closing time"},{Reading:"30.77",Machine:"63",attribute:"Closing time"},{Reading:"32.34",Machine:"67",attribute:"Closing time"},{Reading:"66.5",Machine:"72",attribute:"Closing time"},{Reading:"69.11",Machine:"74",attribute:"Closing time"},{Reading:"71.13",Machine:"80",attribute:"Closing time"},{Reading:"89.24",Machine:"88",attribute:"Closing time"},{Reading:"108.49",Machine:"98",attribute:"Closing time"},{Reading:"43.57",Machine:"103",attribute:"Closing time"},{Reading:"4.65",Machine:"108",attribute:"Closing time"},{Reading:"102.66",Machine:"114",attribute:"Closing time"},{Reading:"50.93",Machine:"122",attribute:"Closing time"},{Reading:"11.57",Machine:"124",attribute:"Closing time"},{Reading:"56.16",Machine:"125",attribute:"Closing time"},{Reading:"1",Machine:"22",attribute:"active"},{Reading:"1",Machine:"31",attribute:"active"},{Reading:"1",Machine:"40",attribute:"active"},{Reading:"1",Machine:"43",attribute:"active"},{Reading:"0",Machine:"53",attribute:"active"},{Reading:"1",Machine:"56",attribute:"active"},{Reading:"0",Machine:"63",attribute:"active"},{Reading:"0",Machine:"67",attribute:"active"},{Reading:"1",Machine:"72",attribute:"active"},{Reading:"0",Machine:"74",attribute:"active"},{Reading:"1",Machine:"80",attribute:"active"},{Reading:"1",Machine:"88",attribute:"active"},{Reading:"1",Machine:"98",attribute:"active"},{Reading:"1",Machine:"103",attribute:"active"},{Reading:"0",Machine:"108",attribute:"active"},{Reading:"0",Machine:"114",attribute:"active"},{Reading:"0",Machine:"122",attribute:"active"},{Reading:"0",Machine:"124",attribute:"active"},{Reading:"1",Machine:"125",attribute:"active"}

  ];
  var count = accounts.length;
  accounts.forEach(function(account) {
    app.models.Account.create(account, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});
