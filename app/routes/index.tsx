import { createFileRoute } from '@tanstack/react-router';
import icon from '~/assets/icon.jpg';

export const Route = createFileRoute('/')({
  component: Home,
});

function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <ExternalLink
      href={href}
      className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-600 flex items-center justify-center text-neutral-300 hover:text-white hover:border-red-400 hover:bg-red-500/10 transition-all duration-200"
    >
      <span className="sr-only">{label}</span>
      {children}
    </ExternalLink>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">
      {children}
    </h2>
  );
}

function ProjectCard({
  title,
  description,
  href,
  tags,
  accent = false,
}: {
  title: string;
  description: string;
  href: string;
  tags: string[];
  accent?: boolean;
}) {
  return (
    <ExternalLink
      href={href}
      className={`block p-5 rounded-xl border transition-all duration-200 group ${
        accent
          ? 'bg-red-500/5 border-red-500/30 hover:border-red-400/60'
          : 'bg-neutral-900/50 border-neutral-700 hover:border-neutral-500'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-neutral-300 mt-1">{description}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="text-neutral-500 group-hover:text-neutral-300 transition-colors shrink-0 mt-0.5">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </ExternalLink>
  );
}

function LinkRow({
  href,
  label,
  value,
}: {
  href: string;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className="flex items-center justify-between py-3 border-b border-neutral-700/50 group"
    >
      <span className="text-sm text-neutral-400">{label}</span>
      <span className="text-sm text-neutral-200 group-hover:text-red-400 transition-colors">
        {value}
      </span>
    </a>
  );
}

function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <div className="max-w-lg mx-auto px-5 py-16 space-y-16">
        {/* Hero */}
        <section className="flex flex-col items-center text-center space-y-5">
          <img
            src={icon}
            alt="@nerikeshi_k"
            className="w-24 h-24 rounded-2xl ring-2 ring-red-400/40 ring-offset-2 ring-offset-neutral-950 saturate-50"
          />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">ねりけし</h1>
            <p className="text-neutral-400 text-sm mt-1">@nerikeshi_k</p>
          </div>
          <p className="text-neutral-300 text-sm leading-relaxed max-w-xs">
            フロントエンドエンジニア / 個人開発者
            <br />
            React・TypeScript で Web サービスをつくっています。
            <br />
            趣味はイラストと音楽制作。
          </p>
          <div className="flex gap-3">
            <SocialIcon href="https://x.com/nerikeshi_k" label="X (Twitter)">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://github.com/nerikeshi-k" label="GitHub">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </SocialIcon>
            <SocialIcon
              href="https://www.pixiv.net/users/10618193"
              label="pixiv"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.935 0A4.924 4.924 0 0 0 0 4.935v14.13A4.924 4.924 0 0 0 4.935 24h14.13A4.924 4.924 0 0 0 24 19.065V4.935A4.924 4.924 0 0 0 19.065 0zm7.81 4.39c2.955 0 5.347 2.392 5.347 5.347 0 2.955-2.392 5.347-5.347 5.347-1.566 0-2.976-.672-3.953-1.744V19.5H6.545V4.39zm0 2.247a3.1 3.1 0 0 0-3.1 3.1 3.1 3.1 0 0 0 3.1 3.1 3.1 3.1 0 0 0 3.1-3.1 3.1 3.1 0 0 0-3.1-3.1z" />
              </svg>
            </SocialIcon>
            <SocialIcon
              href="https://soundcloud.com/nerikeshik"
              label="SoundCloud"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.56 8.87V17h8.76c1.85 0 3.35-1.5 3.35-3.35 0-1.85-1.5-3.35-3.35-3.35-.32 0-.63.05-.92.13A6.2 6.2 0 0 0 13.18 4a6.15 6.15 0 0 0-1.62.22v12.78" />
                <path
                  d="M9.56 18V8.15M7.56 18V9.63M5.56 18v-6.3M3.56 18v-4.5M1.56 18v-2.7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </SocialIcon>
            <SocialIcon
              href="https://www.youtube.com/channel/UC0tSH8tyJq-gy5hP2P_Qi8g"
              label="YouTube"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </SocialIcon>
          </div>
        </section>

        {/* Projects */}
        <section>
          <SectionTitle>Projects</SectionTitle>
          <div className="space-y-3">
            <ProjectCard
              title="お題箱"
              description="クリエイターのためのお題・リクエスト受付サービス。2017年から運営中。"
              href="https://odaibako.net"
              tags={['React', 'Django', '個人開発', '2017〜']}
              accent
            />
            <ProjectCard
              title="monto"
              description="新しい半匿名コミュニケーションサービス。X アカウントで登録し、フォローやタイムラインで交流。"
              href="https://monto.me"
              tags={['React', '個人開発']}
              accent
            />
            <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/30 opacity-60">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-neutral-400">ぼかしったー</h3>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-500 uppercase tracking-wider">
                  closed
                </span>
              </div>
              <p className="text-sm text-neutral-500 mt-1">
                画像をぼかしてツイートできるツール。元画像へのリンク付きで、見たい人だけに画像を公開できた。
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <SectionTitle>Skills</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {[
              'React',
              'TypeScript',
              'JavaScript',
              'Vite',
              'Tailwind CSS',
              'Cloudflare Workers',
              'Python',
              'Node.js',
            ].map((skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Creative */}
        <section>
          <SectionTitle>Creative</SectionTitle>
          <div className="grid grid-cols-2 gap-3">
            <ExternalLink
              href="https://www.pixiv.net/users/10618193"
              className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-700 hover:border-blue-400/50 transition-all group"
            >
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors">
                イラスト・漫画
              </h3>
              <p className="text-xs text-neutral-400 mt-1">pixiv</p>
            </ExternalLink>
            <ExternalLink
              href="https://soundcloud.com/nerikeshik"
              className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-700 hover:border-orange-400/50 transition-all group"
            >
              <div className="text-2xl mb-2">🎵</div>
              <h3 className="font-bold text-sm text-white group-hover:text-orange-400 transition-colors">
                音楽制作
              </h3>
              <p className="text-xs text-neutral-400 mt-1">SoundCloud</p>
            </ExternalLink>
          </div>
          <div className="mt-4 rounded-xl overflow-hidden border border-neutral-700 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/G3AnDPmu6l4"
              title="YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section>

        {/* Contact */}
        <section>
          <SectionTitle>Contact</SectionTitle>
          <div className="rounded-xl border border-neutral-700 bg-neutral-900/30 px-5">
            <LinkRow
              href="mailto:nerikeshik@gmail.com"
              label="Mail"
              value="nerikeshik@gmail.com"
            />
            <LinkRow
              href="https://x.com/nerikeshi_k"
              label="X"
              value="@nerikeshi_k"
            />
            <div className="py-3">
              <span className="text-xs text-neutral-500">
                お題箱に関するお問い合わせは support@odaibako.net まで
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-neutral-500 pt-4">
          &copy; neriko.net
        </footer>
      </div>
    </main>
  );
}
