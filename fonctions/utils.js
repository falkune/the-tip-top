import { toast } from 'react-toastify';

const notifier = (message="Désolé une érreur technique  s'est produite, veuillez réessayer plus tard.", type="error", position = 'top-right', autoClose = 2000) => {
    toast(message, { hideProgressBar: true, autoClose: autoClose, type: type, position: position });
}

export { notifier };