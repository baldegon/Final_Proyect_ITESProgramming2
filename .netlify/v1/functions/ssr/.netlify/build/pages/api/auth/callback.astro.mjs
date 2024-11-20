import { createServerClient, parseCookieHeader } from '@supabase/ssr';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ request, cookies, redirect }) => {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") || "/";
  if (code) {
    const supabase = createServerClient(
      undefined                                   ,
      undefined                                        ,
      {
        cookies: {
          getAll() {
            return parseCookieHeader(Astro.request.headers.get("Cookie") ?? "");
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(
              ({ name, value, options }) => Astro.cookies.set(name, value, options)
            );
          }
        }
      }
    );
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return redirect(next);
    }
  }
  return redirect("/auth/auth-code-error");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
