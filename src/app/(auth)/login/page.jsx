import PageHeader from "@/components/common/PageHeader";
import LoginForm from "@/features/auth/LoginForm";

export default function LoginPage() {
    const handleLogin = (e) => {
        e.preventDefault();
        // API logic will come later
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-4">
                <PageHeader title="Login" />

                <LoginForm />
            </div>
        </div>
    );
}
