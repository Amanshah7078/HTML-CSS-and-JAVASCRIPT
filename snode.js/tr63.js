console.log(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CSS Grid + Media Queries</title>
    </head>
    <body>
        <style>
            .container{
                grid-template-columns: 1fr 1fr;
                display: flex;
                display:grid;
            }
            @media only screen and (max-width:600px){
                body{
                    background-color: aquamarine;
                }
            }
    
            @media only screen and (min-width:600px)and (max-width:1200px){
                body{
                    background-color: rgb(24, 18, 196);
                }
            }
            
            @media only screen and (min-width:1200px)and (max-width:1800px){
                body{
                    background-color: rgb(253, 45, 187);
                }
            }
            
            @media only screen and (min-width:1800px)and (max-width:2400px){
                body{
                    background-color: rgb(201, 255, 24);
                }
            }
    
            @media only screen and (min-width:2400px)and (max-width:2800px){
                body{
                    background-color: rgb(24, 18, 196);
                }
            }
    
            @media only screen and (min-width:2800px)and (max-width:3400px){
                body{
                    background-color: rgb(75, 195, 35);
                }
            }
    
            @media only screen and (min-width:3400px)and (max-width:4000px){
                body{
                    background-color: rgb(255, 98, 14);
                }
            }
            .item{
                border: 2px solid rgb(255, 0, 0);
                display: inline-block;
                padding: 40px;
                margin: 50px;
                align-items: center;
            }
            .item:hover{
                background-color: chartreuse;
            } 
            
        </style>
        <div class="container">
            <h1><div class="item">Learn CSS </div></h1>
            <h1><div class="item">Wrapping keywords for different Android and IOs Devices </div></h1>
            <h1> <div class="item">Get different colors in devices</div></h1>
                <h1><div class="item">It works only in inspect element</div></h1>
                    <h1> <div class="item">You can add paragraph for the normal live server</div></h1>
        </div>
    </body>
    </html>`);    