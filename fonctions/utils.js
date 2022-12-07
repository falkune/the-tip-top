import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const notifier = (message = "Désolé une érreur technique  s'est produite, veuillez réessayer plus tard.", type = "error", position = 'bottom-right', autoClose = 2000) => {
    toast(message, { hideProgressBar: true, autoClose: autoClose, type: type, position: position });
}


const refreshToken = (res, context) => {
    if (res.statusCode == 401) {
        context.backend.api.users.post('refresh-access-token', { refreshToken: Cookies.get('idClient') })
            .then((response) => {
                Cookies.set('authToken', response.accessToken);
                notifier(response.message,'info')
            });
    }
}

export { notifier, refreshToken };