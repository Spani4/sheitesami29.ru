import Noty from 'noty';
import 'noty/src/noty.scss';
import 'noty/src/themes/relax.scss';

export default function showNoty(type,text) {
    
    return new Noty({
            theme: 'relax',
            text,
            type,
            timeout: 3000,
            closeWith: ['click', 'button'],
            progressBar: false
            
        }).show();
}
