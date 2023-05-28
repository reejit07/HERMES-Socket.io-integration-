<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Session;
class kicker
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
   
    public function handle(Request $request, Closure $next)
    {


        if(Session::has('room') && Session::has('email'))
        {
            return redirect("/room");
          
        }
        else if(Session::has('email') && !Session::has('room'))
         {
            return redirect("/dashboard");
         }

        return $next($request);

    }
}
