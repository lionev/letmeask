

import { useHistory, } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'


import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';
import "../styles/auth.scss";


export function Home(){
  const history = useHistory();
  const {user ,signInWithGoogle} = useAuth()

  async function handleCreateRoom(){
    if(!user){
      await signInWithGoogle()
    }
    history.push('/rooms/news');
  }

  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="illustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as suas dúvidas em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="logo do google" />
            Crie sua sala com o google
          </button>
              <div className="separator">ou entre uma sala</div>
            <form>
            <input 
            type="text" 
            placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
            </form>
        </div>
      </main>
    </div>
  )
} 




