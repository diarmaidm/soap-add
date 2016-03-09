# TOC
   - [Home Page](#home-page)
     - [contains a form](#home-page-contains-a-form)
<a name=""></a>
 
<a name="home-page"></a>
# Home Page
has a header describing what it does.

```js
request(app).get('/')
  .expect(/This application uses a soap service to add 2 numbers/, done);
```

handles a GET request.

```js
request(app).get('/')
  .expect(200, done);
```

<a name="home-page-contains-a-form"></a>
## contains a form
contains fields to allow entry of 2 numbers.

```js
request(app).get('/')
  .expect(/name="a"/)
  .expect(/name="b"/, done);
```

contains a button to submit the request.

```js
request(app).get('/')
  .expect(/action="\/"/)
  .expect(/type="submit"/)
  .expect(/method="POST"/, done);
```

adds 2 and 4 and shows the sum as 6 when submit clicked.

```js
var a = 2, b = 4;
request(app).post('/')
  .send({a: a, b: b})
  .end(function (req, res) {
    expect(res.status).to.equal(200);
    expect(res.text).to.contain('The sum of ' +a+ ' and ' +b+ ' is: ' + (a+b) );
    done();
  });
```

adds 4 and 4 and shows the sum as 8 when submit clicked.

```js
var a = 4, b = 4;
request(app).post('/')
  .send({a: a, b: b})
  .end(function (req, res) {
    expect(res.status).to.equal(200);
    expect(res.text).to.contain('The sum of ' +a+ ' and ' +b+ ' is: ' + (a+b) );
    done();
  });
```

