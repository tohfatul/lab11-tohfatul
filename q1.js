const dns = require('dns');
        const siteToConvert = 'www.miu.edu';
        dns.lookup(siteToConvert,(err, address) =>{
            if(err){
                console.log('Problem: ',err);
            }
            if(address){
                console.log('The address is: ',address);
            }            
        });
