class Auth {
    constructor() {
        this.isAuthenticated = false;
        this.user = null;
        this.init();
    }

    init() {
        // Initialize Google Sign-In
        gapi.load('auth2', () => {
            gapi.auth2.init({
                client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com'
            });
        });

        // Add event listeners
        document.getElementById('loginBtn').addEventListener('click', () => this.showLoginModal());
        document.getElementById('logoutBtn').addEventListener('click', () => this.signOut());
        document.querySelector('.close-modal').addEventListener('click', () => this.hideLoginModal());
    }

    showLoginModal() {
        document.getElementById('loginModal').classList.remove('hidden');
    }

    hideLoginModal() {
        document.getElementById('loginModal').classList.add('hidden');
    }

    async onSignIn(googleUser) {
        try {
            const profile = googleUser.getBasicProfile();
            this.user = {
                id: profile.getId(),
                name: profile.getName(),
                email: profile.getEmail(),
                imageUrl: profile.getImageUrl()
            };
            
            this.isAuthenticated = true;
            this.updateUI();
            this.hideLoginModal();
            
            // You can send the token to your backend here
            const id_token = googleUser.getAuthResponse().id_token;
            console.log('Google Token:', id_token);
            
        } catch (error) {
            console.error('Login Error:', error);
        }
    }

    async signOut() {
        try {
            const auth2 = gapi.auth2.getAuthInstance();
            await auth2.signOut();
            
            this.user = null;
            this.isAuthenticated = false;
            this.updateUI();
            
        } catch (error) {
            console.error('Logout Error:', error);
        }
    }

    updateUI() {
        const loginBtn = document.getElementById('loginBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        
        if (this.isAuthenticated) {
            loginBtn.classList.add('hidden');
            logoutBtn.classList.remove('hidden');
        } else {
            loginBtn.classList.remove('hidden');
            logoutBtn.classList.add('hidden');
        }
    }
}

// Initialize auth when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.auth = new Auth();
});

// Google Sign-In callback
function onSignIn(googleUser) {
    window.auth.onSignIn(googleUser);
} 