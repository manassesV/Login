<?php

namespace App\Http\Manipular;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 *
 * @author manab
 */
interface TurmaInterface {
  
 
    public function create();   
    public function store(Request $request);
    public function edit($id);
    public function update(Request $request, $id);
    public function destroy($id);
}
