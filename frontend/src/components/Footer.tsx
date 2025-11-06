import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';
import { FaDiscord } from 'react-icons/fa6';

const social_links = {
  github: "https://github.com/manueljaime007",
  linkedin: "https://www.linkedin.com/in/manuel-jaime-816a8536b/",
  instagram: "https://www.instagram.com/manuel_jaime007/",
  discord: "https://discord.com/channels/@me"
}

const LOGO_TITLE: string = "Manuel Jaime"


export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="container mx-auto px-15 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {LOGO_TITLE}. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4 mr-10">
            <a
              href={social_links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <SiGithub className="h-5 w-5" />
            </a>
            <a
              href={social_links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="h-5 w-5" />
            </a>
            <a
              href={social_links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram className="h-5 w-5" />

            </a>

            <a
              href={social_links.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Discord"
            >
              <FaDiscord className="h-6 w-6" />

            </a>


          </div>
        </div>
      </div>
    </footer>
  );
};
