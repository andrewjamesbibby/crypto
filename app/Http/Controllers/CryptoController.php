<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Artisan;

class CryptoController extends Controller
{
    public function update()
    {
        Artisan::call('crypto:latest');
    }
}
