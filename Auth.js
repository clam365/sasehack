import pb from "./lib/pocketbase"
export default function Auth(){
    return (
        <>
            <h1>Logged In: {pb.authStore.isValid.toString()}</h1>

        </>
    )
}