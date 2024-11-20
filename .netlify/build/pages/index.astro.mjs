/* empty css                                           */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_y4kWyvKk.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/home");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SignIn", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#0A0A0F] bg-cover bg-center bg-fixed relative flex items-center justify-center p-4" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-red-500/10 to-cyan-500/10 pointer-events-none" data-astro-cid-j7pv25f6></div> <div class="w-full max-w-md relative animate-fadeIn" data-astro-cid-j7pv25f6> <div class="bg-black/40 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-lg shadow-red-500/10" data-astro-cid-j7pv25f6> <div class="text-center mb-8" data-astro-cid-j7pv25f6> <h1 class="text-3xl font-bold mb-2" data-astro-cid-j7pv25f6> <span class="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 text-transparent bg-clip-text" data-astro-cid-j7pv25f6>
Welcome Back
</span> </h1> <p class="text-gray-300 text-sm" data-astro-cid-j7pv25f6>
New here?
<a href="/register" class="text-cyan-400 hover:text-cyan-300 transition-colors font-medium ml-1" data-astro-cid-j7pv25f6>
Create an account
</a> </p> </div> <form action="/api/auth/signin" method="post" class="space-y-6" data-astro-cid-j7pv25f6> <div class="space-y-2" data-astro-cid-j7pv25f6> <label for="email" class="text-emerald-400 block text-sm font-medium" data-astro-cid-j7pv25f6>
Email
</label> <input type="email" name="email" id="email" required class="w-full p-3 rounded-lg bg-black/50 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" placeholder="Enter your email" data-astro-cid-j7pv25f6> </div> <div class="space-y-2" data-astro-cid-j7pv25f6> <label for="password" class="text-emerald-400 block text-sm font-medium" data-astro-cid-j7pv25f6>
Password
</label> <input type="password" name="password" id="password" required class="w-full p-3 rounded-lg bg-black/50 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" placeholder="Enter your password" data-astro-cid-j7pv25f6> </div> <div class="flex items-center justify-between text-sm" data-astro-cid-j7pv25f6> <label class="flex items-center text-gray-300" data-astro-cid-j7pv25f6> <input type="checkbox" class="mr-2 rounded border-cyan-500/20 bg-black/50 text-red-500 focus:ring-red-500/20" data-astro-cid-j7pv25f6>
Remember me
</label> <a href="/forgot-password" class="text-cyan-400 hover:text-cyan-300 transition-colors" data-astro-cid-j7pv25f6>
Forgot password?
</a> </div> <button type="submit" class="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-500/20 font-medium" data-astro-cid-j7pv25f6>
Sign In
</button> </form> <div class="mt-8 pt-6 border-t border-white/10" data-astro-cid-j7pv25f6> <div class="flex items-center justify-center gap-4" data-astro-cid-j7pv25f6> <form action="/api/auth/oauth" data-astro-cid-j7pv25f6></form> <button type="submit" class="flex items-center justify-center w-full gap-2 px-4 py-2 bg-black/30 rounded-lg border border-cyan-500/20 text-white hover:bg-black/40 transition-all" data-astro-cid-j7pv25f6> <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-j7pv25f6> <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" data-astro-cid-j7pv25f6></path> <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" data-astro-cid-j7pv25f6></path> <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" data-astro-cid-j7pv25f6></path> <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" data-astro-cid-j7pv25f6></path> </svg>
Continue with Google
</button> </div> </div> </div> </div> </main> ` })} `;
}, "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/pages/index.astro", void 0);

const $$file = "C:/Users/usuario/Documents/BaldegonDev/Proyectos Web/LandingProyectProgII/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
