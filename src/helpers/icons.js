import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt, faPenToSquare, faSpinner, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faPenToSquare, faSpinner, faCirclePlus);
};

export default Icons;

