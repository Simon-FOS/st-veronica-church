import PageHeader from "@/components/common/PageHeader";
import RegisterForm from "@/features/auth/RegisterForm";

export default function RegisterPage() {
    const handleRegister = (e) => {
        e.preventDefault();
        // API logic will come later
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-5">
                <PageHeader title="Parishioner Registration" />

                <RegisterForm onSubmit={handleRegister} />
            </div>
        </div>
    );
}
