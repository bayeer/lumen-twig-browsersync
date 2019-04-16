<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\View as View;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index()
    {
        return View::make('index', ['app_title' => 'Hello from Twig']);
    }
}
