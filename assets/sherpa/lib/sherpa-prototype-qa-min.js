Sherpa.counter("Sherpa Prototype QA");Sherpa.QA={};Sherpa.QA.log={};Sherpa.QA.logEntry=function(b,a){var c=Sherpa.uuid();Sherpa.QA.log[c]={id:c,tags:a,description:b,url:location.href,timestamp:Sherpa.counter()};Sherpa.QA.msg(c)};Sherpa.QA.find=function(a){return JSON.stringify(_.filter(Sherpa.QA.log,function(b){return JSON.stringify(b).match(a)}),null,5)};Sherpa.QA.msg=function(a){if(SHERPA.ENABLE_PROTOTYPE_QA){console.error(Sherpa.QA.log[a].description+" :",Sherpa.QA.log[a])}};Sherpa.counter("Sherpa Prototype QA");