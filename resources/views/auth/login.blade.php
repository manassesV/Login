@extends('layouts.app')

@section('content')
<body id="img_img">
    <section >
        <article class="container-fluid" >

            <header>
                <div class="row">
                    <img src="{{asset('img/logo.png')}}"/>
                </div>
            </header>
            <section id="form"> 
                <header>
                    <nav>
                        <ol>
                            <li><p><strong>ENTRE NA PLATAFORMA</strong></p></li>
                        </ol>	 
                    </nav>
                </header>                                              
                <form class="form-horizontal" method="POST" action="{{ route('login') }}">
                    {{ csrf_field() }}
                    <div class="form_usu" >
                        <div class="form-group has-feedback {{ $errors->has('email') ? ' has-error' : '' }}"  >
                            <input   type="email" name="email" class="form-control" id="email" placeholder="Informe Email *" value="{{old('email')}}" required autofocus/>
                        </div>
                        <div class="form-group has-feedback{{ $errors->has('password') ? ' has-error' : '' }}">
                            <input type="password" name="password" class="form-control" id="password" placeholder="Informe a Senha*" maxlength="10"/>
                        </div>                              
                        <div class="form-group">
                            <div class="col-md-12 col-md-offset-1">
                                @if ($errors->has('email'))
                                <div class="msg-erro">{{ $errors->first('email') }}</div>
                                @endif    
                                @if ($errors->has('password'))
                                <div class="msg-erro">{{ $errors->first('password') }}</div>
                                @endif 
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="btn btn-danger logar">ENTRAR<span class="glyphicon glyphicon-chevron-right"></span>
                        </div>                                  
                        <div id="text">
                            <strong>OU</strong>
                        </div>                           

                        <a class="btn btn-social btn-facebook text-center button" href="{{ route('password.request') }}">
                            <i class="glyphicon glyphicon-wrench "></i><div class="paddind">Esqueceu a Senha</div>
                        </a>
                    </div>  
                    <div>
                        <a class="btn btn-social btn-google text-center button" href="{{ url('/register') }}">
                            <i class="glyphicon glyphicon-user"></i><div class="paddind">Cadastrar o Professor</div>
                        </a>
                    </div>  

                </form>                                       
            </section>
            <footer class="text-center ">
                <div id="footer">
                    Desenvolvido por: Manassés/Luciene 2017
                </div>
            </footer>
        </article>
    </section>
    @endsection
