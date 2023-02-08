import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Form, Button, Input } from 'antd'

const firebaseConfig = {
    apiKey: "AIzaSyDinbj2CLhBWCuR6kdO_hIk-6hImXWw__E",
    authDomain: "simple-login-ah.firebaseapp.com",
    projectId: "simple-login-ah",
    storageBucket: "simple-login-ah.appspot.com",
    messagingSenderId: "436712694793",
    appId: "1:436712694793:web:c13654e12be83f837744d8"
  };


export default function Login({setUser, setIsUser}) {
    const loginwithgoogle = async () => {
        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app)
        const provider = new GoogleAuthProvider()
        const _user = await signInWithPopup(auth, provider)
        .catch(alert)
        console.log(_user)
       setUser(_user.user)
    }

    const handleSubmit = async ({ email, password }) => {
        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app)
        const _user = await signInWithEmailAndPassword(auth, email, password)
        .catch(alert)
        console.log(_user)
       setUser(_user.user)
    }
return(
    <section>
        <h1>Login</h1>
        <Form onFinish={handleSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item label="Email" name="email"> 
        <Input type='email' />
        </Form.Item>
        <Form.Item label="Password" name="password"> 
        <Input.Password />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType='submit'>Login</Button>
        </Form.Item>
        </Form>
        <Button onClick={loginwithgoogle}>Login With Google</Button>
        <p>Not a user ? <Button onClick={() => setIsUser(false)}>Sign Up</Button></p>
    </section>
)
}