import icon from '~/assets/icon.jpg';
import xlogo from '~/assets/x.png';

export default function Home() {
  return (
    <main className="my-8 space-y-12 w-full max-w-screen-sm mx-auto px-2">
      <section className="flex flex-col space-y-4 items-center">
        <h1 className="text-4xl text-center">neriko.net</h1>
        <div>私について</div>
        <img
          src={icon}
          alt="@nerikeshi_k"
          className="w-20 h-20 rounded-full border-2 border-black overflow-hidden"
        />
        <a
          href="https://x.com/nerikeshi_k"
          rel="noopener noreferrer"
          target="_blank"
          className="w-8 h-8 p-2 bg-black rounded-full flex items-center justify-center"
        >
          <img src={xlogo} className="w-full h-full" alt="x, @nerikeshi_k" />
        </a>
      </section>
      <section>
        <h2 className="my-4 font-bold text-center">自己紹介</h2>
        <ol className="list-decimal space-y-4 ml-8">
          <li>
            <span className="font-bold">ねりけし</span>です。
          </li>
          <li>
            Reactのプログラマです。主な制作物は
            <a
              href="https://odaibako.net"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-sky-500"
            >
              お題箱
            </a>
            などです。
            <ol className="list-[lower-latin] ml-8">
              <li>
                <a
                  href="https://github.com/nerikeshi-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-sky-500"
                >
                  GitHub
                </a>
              </li>
            </ol>
          </li>
          <li>
            趣味でイラストや漫画の制作をしています。
            <ol className="list-[lower-latin] ml-8">
              <li>
                <a
                  href="https://www.pixiv.net/users/10618193"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-sky-500"
                >
                  pixiv
                </a>
              </li>
            </ol>
          </li>
          <li>
            趣味で音楽制作をしています（していました）。
            <ol className="list-[lower-latin] ml-8">
              <li>
                <a
                  href="https://www.youtube.com/channel/UC0tSH8tyJq-gy5hP2P_Qi8g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-sky-500"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://soundcloud.com/nerikeshik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-sky-500"
                >
                  SoundCloud
                </a>
              </li>
            </ol>
          </li>
        </ol>
      </section>
      <section>
        <h2 className="my-4 font-bold text-center">連絡先</h2>
        <ol className="list-decimal ml-8">
          <li>
            メール:{' '}
            <a
              href="mailto:nerikeshik@gmail.com"
              className="underline text-sky-500"
            >
              nerikeshik@gmail.com
            </a>
          </li>
          <li>
            X:{' '}
            <a
              href="https://x.com/nerikeshi_k"
              rel="noopener noreferrer"
              target="_blank"
              className="underline text-sky-500"
            >
              @nerikeshi_k
            </a>
          </li>
        </ol>
        <div className="text-gray-700 my-4 text-sm mx-8">
          お題箱に関するお問い合わせはsupport@odaibako.netまでお願いいたします。
        </div>
      </section>
    </main>
  );
}
