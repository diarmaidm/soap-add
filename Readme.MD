# Add two number using a soap call
## This application adds two numbers using an external soap service


Installed jshint as a dev dependancy 
```npm install jshint --save-dev```
and added 
```"pretest": "jshint routes test",``` 
to package.json to do basic linting when tests are ran



For some reason when run single test it creates 
```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tns="http://free-web-services.com/soap">
    <soap:Body>
        <tns:addRequest xmlns:tns="http://free-web-services.com/soap">
            <a>6</a>
            <b>7</b>
        </tns:addRequest>
    </soap:Body>
</soap:Envelope>
```
but all tests it creates
```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tns="http://free-web-services.com/soap">
    <soap:Body>
        <addRequest>
            <a>6</a>
            <b>7</b>
        </addRequest>
    </soap:Body>
</soap:Envelope>
```