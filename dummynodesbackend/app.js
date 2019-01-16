var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var jwt = require( 'jsonwebtoken' );
var cors = require('cors');

const app = express();
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

// allowing CORS
 

 app.use(cors());
 
 
            // OR

// app.use( (req, res, next) => {

//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Methods','*');
//     res.header('Access-Control-Allow-Headers',"*");

//     // res.header('Access-Control-Allow-Methods',' GET, POST, PUT, PATCH, DELETE ');
//     // res.header('Access-Control-Allow-Headers'," Origin, X-Requested-With, Content-Type, X-auth-token");
//     next();
// });


const validUser = {
    userName: 'Vikash',
    password: '12345'
}


app.get( '/', ( req, res ) => {
    res.send( { 'server': 'running' } );
});


app.post( '/api/login', ( req, res ) => {
    let user = req.body;
    const userName = user.userName;
    const password = user.password;

    if ( userName == validUser.userName && password == validUser.password ) {

        var loginDetails = {
            name: "Vikash",
            email: "vkgsbs@gmail.com",
            admin: true,
            loginAt: new Date().getTime()
        }
        jwt.sign( loginDetails, 'secretKey', ( err, token ) => {
            // sending token in header. it can be saved on local storage & check everytime to check login status
            // res.setHeader('X-auth-token',token);  // not working now
            res.status( 200 ).send( { 'login': 'success', token}); // token is token: token (es6)
        });

    } else {
         res.status( 401 ).send( JSON.stringify( { 'login': 'invalid' } ) );
    }
});

app.post( '/api/courses', verifyToken, ( req, res ) => {

    res.status( 200 ).send({ 'status':'you can post courses', 'payload':req.user});

} );

app.get( '/api/order', verifyToken, ( req, res ) => {

    setTimeout( () => {
        res.status( 200 ).send({
            'order': [10, 20, 30]
         });
    },1000);

});


function verifyToken ( req, res, next ) {

    const header = req.header( 'auth-token' );
    if ( !header ) return res.status(401).send( 'Access denied ! No token provided' );

    // if token is there then verify token

    try{
        const decoded = jwt.verify(header, 'secretKey');
        req.user = decoded; // we can use user in next middleware bcz user is now property
        // console.log(decoded);
        next();
    }
    catch(error){
       return res.status(400).send('Invalid token..');
    }
}


app.listen( 3000, () => {
    console.log( 'server listing at port 3000' );
});