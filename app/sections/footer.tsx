export function Footer() {
    return (
        <footer className="flex justify-between items-center pt-6 mt-8 border-t border-border-light">
            <p className="text-sm text-text-tertiary">© 2026 Aidan Gurung</p>
            <p className="text-sm text-text-tertiary">
                Inspired by{' '}
                <a
                    href="https://www.evanferreira.com/"
                    className="text-accent hover:underline transition-all duration-200"
                >
                    Evan Ferreira
                </a>
            </p>
        </footer>
    );
}
