<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');



class Manasses{

    private $nome;
    private $teste2;
    
    public function __construct1($nome) {
        $this->nome = $nome;
    }   
    
    public function __construct2($nome,$teste) {
        $this->nome = $nome;
        $this->teste2 = $teste;
    } 
    
    public function __toString() {
        return "$this->nome the $this->teste2";
    }
    public function __destruct() {
        return "Obj destruido";
    }
}

$obj = new Manasses("claudia","Geraldo");

echo $obj;

$obj = null;
unset($obj);












