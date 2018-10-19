/**
 * Created by root on 19/10/18.
 */
export default function setUserAction(name,surname) {
    return {
        type: "SET_USER",
        payload: name+' '+surname
    }
}