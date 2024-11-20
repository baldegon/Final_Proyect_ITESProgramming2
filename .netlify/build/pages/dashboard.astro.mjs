/* empty css                                           */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro } from '../chunks/astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { s as supabase } from '../chunks/supabase_CfMgWXZK.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const accessToken = Astro2.cookies.get("sb-access-token");
  const refreshToken = Astro2.cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return Astro2.redirect("/signin");
  }
  let session;
  try {
    session = await supabase.auth.setSession({
      refresh_token: refreshToken.value,
      access_token: accessToken.value
    });
    if (session.error) {
      Astro2.cookies.delete("sb-access-token", {
        path: "/"
      });
      Astro2.cookies.delete("sb-refresh-token", {
        path: "/"
      });
      return Astro2.redirect("/signin");
    }
  } catch (error) {
    Astro2.cookies.delete("sb-access-token", {
      path: "/"
    });
    Astro2.cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return Astro2.redirect("/signin");
  }
  const email = session.data.user?.email;
  return renderTemplate`${maybeRenderHead()}<header class=" bg-slate-600 fixed top-0 left-0 w-full bg-blue-600 text-white shadow-lg"> <div class="container mx-auto flex justify-between items-center py-4 px-6"> <div class="text-lg font-bold"> <a href="/#" class="hover:text-gray-200">TaurosCocktails</a> </div> <nav> <ul class="flex space-x-6"> <li><a href="/dashboard" class="hover:text-gray-200 py-2 px-4 ">Dashboard</a></li> <form action="/api/auth/signout"> <button type="submit" class="bg-red-300 text-black py-2 px-4 rounded-md hover:bg-red-600 transition">Sign out</button> </form> </ul> </nav> </div> </header> <section class="h-full w-full justify-center items-center"> <main class=" bg-blend-normal flex flex-col flex-grow justify-center items-center pt-20 pb-20 min-h-screen overflow-hidden"> <h1 class="text-3xl font-bold mb-4 p-4px">Welcome ${email}</h1> <p class="mb-6">We are happy to see you here</p> </main> </section>`;
}, "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
