<?php

namespace App\Http\Manipular;
use App\Turma;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of TurmaManipular
 *
 * @author manab
 */
class TurmaManipular implements TurmaInterface{
    
    private $turma;
    
    public function __call($name, $arguments) {
           // Note: value of $name is case sensitive.
        echo "Calling static method '$name' "
             . implode(', ', $arguments). "\n";
    }
    public static function __callStatic($name, $arguments) {
        echo "Calling static method'$name'".
        implode(',',$arguments)  ;
    }
    
    public function __invoke($x) {
        var_dump($x);
    }


    public function __construct(Turma $turma) {
        $this->turma = $turma;
    }


    public function __toString() {
        
        return "mana" ;
    }
    
    
    public function create() {
        
    }

    public function destroy($id) {
        
    }

    public function edit($id) {
        
    }

    public function store(Request $request) {
        
    }

    public function update(Request $request, $id) {
        
    }

}
