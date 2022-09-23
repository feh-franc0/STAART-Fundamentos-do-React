import './styles/App.css';
import './styles/PostForm.css';

import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg';

// fontSize
export default function App() {
    return (
    <div className='wrapper'>
        <form className="post-form" onClick={() => alert('Formulário submetido')}>
            <input placeholder="Escreva uma nova história..." />

            <div>
                <img src={userIcon} alt="User"/>

                <input placeholder="Digite seu nome..." />

                <button type="submit">
                    <img src={paperPlaneIcon} alt="Paper plane"/>

                    Publicar
                </button>
            </div>
        </form>
    </div>
    )
}
