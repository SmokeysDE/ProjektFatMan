import Button from "@mui/material/Button";
export default function Home() {
    const handleLoginButton = () => {
        window.location.href = '/login';
    }
    const handleRegisterButton = () => {
        window.location.href = '/register';
    }
    return (
        <div className={'bg-bluegpt h-screen w-screen'}>
            <h1>Home</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pulvinar risus sed risus suscipit, sit amet ultrices enim
                tincidunt. Sed euismod, nisl nec interdum hendrerit, augue
                ligula tincidunt leo, vitae ultricies libero lectus at ligula.
                Sed ut nunc euismod, fermentum ipsum vitae, aliquam nisl.
                Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Nulla facilisi. Donec
                consectetur, sapien vitae aliquet ultricies, mi nisi commodo
                nunc, quis ultricies diam diam auctor felis. Donec euismod
                libero quis lectus ultrices, eget aliquam odio ultricies.
                Suspendisse potenti. Nulla facilisi. Donec ultrices, nisl
                vitae ultricies interdum, nunc libero ultrices ipsum, et
                ultricies ipsum sem in nunc. Donec at nunc eget nisl
                condimentum mollis. Nulla facilisi. Donec sed elit eget
                sapien ultricies tincidunt. Nullam euismod, libero sed
                ultricies ultrices, nunc elit dignissim nunc, eget
                condimentum lorem quam a nunc. Sed vel elit sed metus
                tincidunt tempor. Donec eget elit sed nunc ultrices
                ullamcorper. Nulla facilisi. Sed ac tortor eget nunc
                ultr
            </p>
        </div>
    );
}