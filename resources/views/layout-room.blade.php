<html>
<head>
       <meta name="viewport" content="width=device-width, initial-scale=0.9">
    <title>@yield('tittle')</title>

    <link rel="shortcut icon" type="image" href="{{ secure_asset('pic/hermeslogo.png.png') }}">
<link rel="stylesheet" type="text/css" href="{{ secure_asset('css/font.css') }}">
<link href="{{ secure_asset('bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
<script src="{{ secure_asset('Javascript/jquery.js') }}"></script>
  @section("csslink")
        @show

</head>
<body>


<div id="main">
    @section("main")
        @show
     </div>   
        
       
 @section("script")
  @show

  
</body>
</html>