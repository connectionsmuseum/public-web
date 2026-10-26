# Focused museum-site review map

2026-10-26 · 16 replacement draft PRs · 23 original commits accounted for

The finished source is preserved. The new reviews separate infrastructure, components, migration, UI, and editorial work. Components/shared data, page migration, and content each use ordered commits within a combined PR.

## Reviews

| PR | Purpose | Review base | Commits |
| --- | --- | --- | ---: |
| [#31](https://github.com/connectionsmuseum/public-web/pull/31) | Standardize Node and npm installation | `trunk` | 1 |
| [#32](https://github.com/connectionsmuseum/public-web/pull/32) | Introduce Astro and its local build | [#31](https://github.com/connectionsmuseum/public-web/pull/31) | 1 |
| [#33](https://github.com/connectionsmuseum/public-web/pull/33) | Check Astro builds on pull requests | [#32](https://github.com/connectionsmuseum/public-web/pull/32) | 1 |
| [#34](https://github.com/connectionsmuseum/public-web/pull/34) | Define formatter automation and workflow triggers | [#31](https://github.com/connectionsmuseum/public-web/pull/31) | 2 |
| [#35](https://github.com/connectionsmuseum/public-web/pull/35) | Introduce Astro components and shared visitor data | [#32](https://github.com/connectionsmuseum/public-web/pull/32) | 5 |
| [#36](https://github.com/connectionsmuseum/public-web/pull/36) | Migrate the existing museum pages to Astro | [#35](https://github.com/connectionsmuseum/public-web/pull/35) | 5 |
| [#39](https://github.com/connectionsmuseum/public-web/pull/39) | Improve keyboard focus and skip navigation | [#35](https://github.com/connectionsmuseum/public-web/pull/35) | 1 |
| [#40](https://github.com/connectionsmuseum/public-web/pull/40) | Self-host Jost and remove unused font requests | [#35](https://github.com/connectionsmuseum/public-web/pull/35) | 1 |
| [#41](https://github.com/connectionsmuseum/public-web/pull/41) | Restore the shared type and spacing scale | [#35](https://github.com/connectionsmuseum/public-web/pull/35) | 1 |
| [#42](https://github.com/connectionsmuseum/public-web/pull/42) | Add relay logo modes and optical wordmark spacing | [#35](https://github.com/connectionsmuseum/public-web/pull/35) | 1 |
| [#43](https://github.com/connectionsmuseum/public-web/pull/43) | Preserve filename-based image variants as an optional tool | [#35](https://github.com/connectionsmuseum/public-web/pull/35) | 1 |
| [#44](https://github.com/connectionsmuseum/public-web/pull/44) | Add Nova development and generated-preview tasks | [#35](https://github.com/connectionsmuseum/public-web/pull/35) | 1 |
| [#37](https://github.com/connectionsmuseum/public-web/pull/37) | Organize existing Seattle information into focused routes | [#36](https://github.com/connectionsmuseum/public-web/pull/36) | 2 |
| [#38](https://github.com/connectionsmuseum/public-web/pull/38) | Expand museum exhibits visitor guidance and collection updates | [#37](https://github.com/connectionsmuseum/public-web/pull/37) | 8 |
| [#45](https://github.com/connectionsmuseum/public-web/pull/45) | Publish the verified Astro artifact through GitHub Pages | Migration #36 + build CI #33 helper | 1 |
| [#46](https://github.com/connectionsmuseum/public-web/pull/46) | Retire legacy root pages after Pages activation | [#45](https://github.com/connectionsmuseum/public-web/pull/45) | 1 |

## Landing and retargeting

Start with #31, then #32 and the independent formatter #34. The component/data foundation #35 enables migration #36 and sibling UI/tool/editor reviews #39–44. Seattle routing #37 follows migration; the combined content review #38 follows routing. Build checking #33 can proceed after #32.

The publication review #45 uses `codex/review-pages-prerequisites` solely to combine #33 and #36 as a clean comparison base. It is not an additional product PR. Before merging a dependent review, land its prerequisite(s), rebase only its own commits onto updated `trunk`, and retarget its PR. Do not merge a child into an unreviewed parent just to advance the stack.

Prefer landing publication after the desired route/content/UI changes are integrated. Parallel work touches the header, layout, and Seattle/library links; preserve both features during rebase and rerun root/Pages verification. The verified assembly and reference record the final combined behavior. Keep route movement separate from new prose while resolving intermediate conflicts.

**#46 stays a draft until GitHub Pages activation and a successful generated-site deployment have been verified.** No PR was merged and no Pages setting was changed during reconstruction.

## Self-review corrections

Four small follow-up commits address the bounded self-review:

- [#34](https://github.com/connectionsmuseum/public-web/pull/34), [`8247a4e`](https://github.com/connectionsmuseum/public-web/commit/8247a4e2b4196c92667595db8907ea27ff27e441): Keep the formatter check read-only and use the required `autofix.ci` write-workflow name. YAML/action wiring and formatting checks pass locally; this draft base does not trigger the trunk-only check.
- [#35](https://github.com/connectionsmuseum/public-web/pull/35), [`13c5c7e`](https://github.com/connectionsmuseum/public-web/commit/13c5c7eb45fd5bc994c4f9a8fca9650c7bf79fc1): Render the existing `VisitInfo` ID prop on its article. An isolated build verifies both the article fragment and its heading target.
- [#36](https://github.com/connectionsmuseum/public-web/pull/36), [`a42c815`](https://github.com/connectionsmuseum/public-web/commit/a42c8150d4d0318748d79afed72abc4c45a78623): Document only the seven routes available at this stage and give an explicit preview-port command. The build generates all documented URLs.
- [#37](https://github.com/connectionsmuseum/public-web/pull/37), [`d12b03d`](https://github.com/connectionsmuseum/public-web/commit/d12b03dd64e5820ca375cf63ff8f0ee8d25df6e6): Show the shared closure notice when introducing the visit route and document the three added routes here. Ten-route builds verify the notice appears once on all three entry pages and clears after reset.

Affected descendants are restacked on those fixes; the later content PR retains the closure component once. The corrected assembly passes root and Pages builds (13 pages, 207 local URLs) and the repository formatter check. Its tree matches the corrected reference exactly. Compared with the original reference, the final changes are limited to two formatter workflows, the `VisitInfo` article ID, and the explicit README preview command. The closure correction belongs earlier in the history and does not alter the already-correct final visit page.

The original `review-reference-20261026`, `review-assembly-20261026`, and `review-map-20261026` tags remain immutable. Before-fix heads and a verified corrected-history bundle are preserved locally. Existing browser screenshots predate these narrow corrections. All reviews remain drafts and #46 retains its successful-deployment condition.

## Preserved endpoints and verification

- Reference commit: `10c414c9a49690fb9125831c30f29e76594831bc` ([source](https://github.com/connectionsmuseum/public-web/tree/review-reference-self-review-fixes-20261026)).
- Verified assembled tree: `2c089e749ff3fed6485f0fa3ae31644bef6f66a8`; tracked files match the reference exactly.
- All 16 review bases, scope/whitespace checks, and package/lock metadata checks pass. No generated `dist/` or `.astro/` files appear in the published implementation history.
- Production builds pass: the final site contains 13 routes and 207 verified Pages URLs. `/demo` remains development-only.
- Repository Prettier check passes; clean offline installs/checks pass for the toolchain-only and formatter branches.
- Chrome checks cover the component gallery, skip-link focus, local font loading, mobile light/dark header rendering, and final page layout/assets.
- Closure notices appear on all three entry pages and clear after restoring the unchanged source. Image fixtures cover uppercase JPEGs, EXIF rotation, no upscaling, and unchanged originals.
- The built 404 page maps a missing Pages path/query to the canonical archived-copy URL and excludes the fragment.

These are local verification results. GitHub checks are separate and may still be pending or absent on a dependent draft.

[Review screenshots](https://github.com/connectionsmuseum/public-web/tree/review-evidence-20261026). Screenshots are stored as evidence outside the product branches.

## Original PR replacements

| Original | Replacement reviews |
| --- | --- |
| [#18](https://github.com/connectionsmuseum/public-web/pull/18) | [#31](https://github.com/connectionsmuseum/public-web/pull/31), [#32](https://github.com/connectionsmuseum/public-web/pull/32), [#34](https://github.com/connectionsmuseum/public-web/pull/34), [#35](https://github.com/connectionsmuseum/public-web/pull/35), [#44](https://github.com/connectionsmuseum/public-web/pull/44), [#46](https://github.com/connectionsmuseum/public-web/pull/46) |
| [#19](https://github.com/connectionsmuseum/public-web/pull/19) | [#35](https://github.com/connectionsmuseum/public-web/pull/35), [#36](https://github.com/connectionsmuseum/public-web/pull/36), [#33](https://github.com/connectionsmuseum/public-web/pull/33), [#45](https://github.com/connectionsmuseum/public-web/pull/45), [#46](https://github.com/connectionsmuseum/public-web/pull/46) |
| [#20](https://github.com/connectionsmuseum/public-web/pull/20) | [#35](https://github.com/connectionsmuseum/public-web/pull/35), [#39](https://github.com/connectionsmuseum/public-web/pull/39) |
| [#21](https://github.com/connectionsmuseum/public-web/pull/21) | [#40](https://github.com/connectionsmuseum/public-web/pull/40), [#38](https://github.com/connectionsmuseum/public-web/pull/38) |
| [#22](https://github.com/connectionsmuseum/public-web/pull/22) | [#35](https://github.com/connectionsmuseum/public-web/pull/35), [#43](https://github.com/connectionsmuseum/public-web/pull/43) |
| [#23](https://github.com/connectionsmuseum/public-web/pull/23) | [#40](https://github.com/connectionsmuseum/public-web/pull/40), [#41](https://github.com/connectionsmuseum/public-web/pull/41) |
| [#25](https://github.com/connectionsmuseum/public-web/pull/25) | [#42](https://github.com/connectionsmuseum/public-web/pull/42) |
| [#28](https://github.com/connectionsmuseum/public-web/pull/28) | [#35](https://github.com/connectionsmuseum/public-web/pull/35), [#36](https://github.com/connectionsmuseum/public-web/pull/36), [#37](https://github.com/connectionsmuseum/public-web/pull/37), [#38](https://github.com/connectionsmuseum/public-web/pull/38) |
| [#30](https://github.com/connectionsmuseum/public-web/pull/30) | [#31](https://github.com/connectionsmuseum/public-web/pull/31), [#32](https://github.com/connectionsmuseum/public-web/pull/32), [#43](https://github.com/connectionsmuseum/public-web/pull/43) |

Original heads have immutable `review-source-prNUMBER-20261026` tags, including merged source PRs #26/#27. Original branch tips remain unchanged. Original descriptions/discussions/reviews, a verified Git bundle, binary index/worktree patches, file archives, and source-image checksums are retained locally. A separate restored clone reproduces all 79 saved main-checkout files and its exact staged patch. The original 22 staged paths remain staged in the original checkout.

## Commit coverage

Each original contribution is assigned below. Superseded drafts, temporary generator removal/restoration, duplicate dependency refreshes, and disposable Seattle wrapper components are folded into their resolved outcomes. Original history remains available through the preserved source tags and bundle.

| Original commit | Replacement reviews |
| --- | --- |
| [`7b7c1f5`](https://github.com/connectionsmuseum/public-web/commit/7b7c1f5f5a9e345b9502d86760d4d05514a598e3) | [#32](https://github.com/connectionsmuseum/public-web/pull/32), [#35](https://github.com/connectionsmuseum/public-web/pull/35), [#34](https://github.com/connectionsmuseum/public-web/pull/34), [#44](https://github.com/connectionsmuseum/public-web/pull/44), [#46](https://github.com/connectionsmuseum/public-web/pull/46) |
| [`ef341ab`](https://github.com/connectionsmuseum/public-web/commit/ef341abb3987fb6233507eca9277032d18d75dc1) | [#31](https://github.com/connectionsmuseum/public-web/pull/31), [#32](https://github.com/connectionsmuseum/public-web/pull/32) |
| [`5318e7f`](https://github.com/connectionsmuseum/public-web/commit/5318e7fa1e39ea1348bb2cc423291420834c8128) | [#35](https://github.com/connectionsmuseum/public-web/pull/35), [#36](https://github.com/connectionsmuseum/public-web/pull/36), [#46](https://github.com/connectionsmuseum/public-web/pull/46) |
| [`9ea0970`](https://github.com/connectionsmuseum/public-web/commit/9ea0970be06b18d28ea31f3e405c57816ca514cc) | [#33](https://github.com/connectionsmuseum/public-web/pull/33), [#45](https://github.com/connectionsmuseum/public-web/pull/45) |
| [`fccc99e`](https://github.com/connectionsmuseum/public-web/commit/fccc99ede306436773dc457dc1d9fe894fa78715) | [#35](https://github.com/connectionsmuseum/public-web/pull/35), [#39](https://github.com/connectionsmuseum/public-web/pull/39) |
| [`7fb7d04`](https://github.com/connectionsmuseum/public-web/commit/7fb7d04a28b7de340c38418fcac0c190a83c1925) | [#40](https://github.com/connectionsmuseum/public-web/pull/40), [#38](https://github.com/connectionsmuseum/public-web/pull/38) |
| [`fd8da36`](https://github.com/connectionsmuseum/public-web/commit/fd8da36e6163eedc7a68001efb9eb67b9789f595) | [#35](https://github.com/connectionsmuseum/public-web/pull/35), [#43](https://github.com/connectionsmuseum/public-web/pull/43) |
| [`e57edf2`](https://github.com/connectionsmuseum/public-web/commit/e57edf2bd530f47885f9cab6d5cbf89f970d1562) | [#40](https://github.com/connectionsmuseum/public-web/pull/40), [#41](https://github.com/connectionsmuseum/public-web/pull/41) |
| [`822271e`](https://github.com/connectionsmuseum/public-web/commit/822271edf3e5ea0095ac94e958c46125878480b9) | [#42](https://github.com/connectionsmuseum/public-web/pull/42) |
| [`b774e0d`](https://github.com/connectionsmuseum/public-web/commit/b774e0d1b48de35ff653e0063d8d21a23f5c16b0) | [#38](https://github.com/connectionsmuseum/public-web/pull/38) |
| [`a7e00ea`](https://github.com/connectionsmuseum/public-web/commit/a7e00ea8e5fc4a8a608cf682d93bc9d8e4c14902) | [#37](https://github.com/connectionsmuseum/public-web/pull/37), [#38](https://github.com/connectionsmuseum/public-web/pull/38) |
| [`d9ac13f`](https://github.com/connectionsmuseum/public-web/commit/d9ac13f834db546ab5d8be52ce27066155c467e0) | [#31](https://github.com/connectionsmuseum/public-web/pull/31), [#32](https://github.com/connectionsmuseum/public-web/pull/32), [#43](https://github.com/connectionsmuseum/public-web/pull/43) |
| [`5e110ab`](https://github.com/connectionsmuseum/public-web/commit/5e110ab4d03f4817e8632a8e64de710d77daed48) | [#43](https://github.com/connectionsmuseum/public-web/pull/43) |
| [`69b7993`](https://github.com/connectionsmuseum/public-web/commit/69b79936cb57f43a1509ef29f37d9456a7218fa6) | [#38](https://github.com/connectionsmuseum/public-web/pull/38) |
| [`a10bac6`](https://github.com/connectionsmuseum/public-web/commit/a10bac67d7f51188617c00fe8313849068ed9bee) | [#38](https://github.com/connectionsmuseum/public-web/pull/38) |
| [`632728a`](https://github.com/connectionsmuseum/public-web/commit/632728a3664faedeb0de593f5755d7d7712d1841) | [#38](https://github.com/connectionsmuseum/public-web/pull/38) |
| [`9005ba4`](https://github.com/connectionsmuseum/public-web/commit/9005ba4eba59522563d4ac8df0f5230f285d2e02) | [#38](https://github.com/connectionsmuseum/public-web/pull/38) |
| [`c85f204`](https://github.com/connectionsmuseum/public-web/commit/c85f20466bb0323f11668fd753b089ec6393e23e) | [#38](https://github.com/connectionsmuseum/public-web/pull/38) |
| [`9f313bd`](https://github.com/connectionsmuseum/public-web/commit/9f313bdbeccbc9e5cf1d64053b8e120d2d724a81) | [#38](https://github.com/connectionsmuseum/public-web/pull/38) |
| [`e071765`](https://github.com/connectionsmuseum/public-web/commit/e071765b5d4d831bc1f401fc4a3244ded8e5b81e) | [#38](https://github.com/connectionsmuseum/public-web/pull/38) |
| [`058b97c`](https://github.com/connectionsmuseum/public-web/commit/058b97c9e5ea2d6c03395c0abb7bd443fe17e7c1) | [#38](https://github.com/connectionsmuseum/public-web/pull/38) |
| [`4af0b96`](https://github.com/connectionsmuseum/public-web/commit/4af0b96f5dc8eabfea6fbd7c436a86ea6d228639) | [#37](https://github.com/connectionsmuseum/public-web/pull/37), [#38](https://github.com/connectionsmuseum/public-web/pull/38) |
| [`aa1c637`](https://github.com/connectionsmuseum/public-web/commit/aa1c6373a58c6c7826adc72bbb83236a19f900db) | [#35](https://github.com/connectionsmuseum/public-web/pull/35), [#36](https://github.com/connectionsmuseum/public-web/pull/36), [#37](https://github.com/connectionsmuseum/public-web/pull/37), [#38](https://github.com/connectionsmuseum/public-web/pull/38) |

## Recorded base tips for future rebases

Use these exclusion points when the corresponding prerequisite is squash-merged; refresh first and preserve any newer work.

| Branch | Current review-base SHA |
| --- | --- |
| `codex/review-toolchain` | `fe86b53ed24ddc654536ed304c2bad276c44adee` |
| `codex/review-astro` | `963cbd01b095cb4da1bbe8b803331052276e3c35` |
| `codex/review-build-ci` | `658e98e0847c3b6af2de7ecb2de0a7a2cde4d32e` |
| `codex/review-formatter` | `963cbd01b095cb4da1bbe8b803331052276e3c35` |
| `codex/review-components` | `658e98e0847c3b6af2de7ecb2de0a7a2cde4d32e` |
| `codex/review-migration` | `13c5c7eb45fd5bc994c4f9a8fca9650c7bf79fc1` |
| `codex/review-keyboard` | `13c5c7eb45fd5bc994c4f9a8fca9650c7bf79fc1` |
| `codex/review-fonts` | `13c5c7eb45fd5bc994c4f9a8fca9650c7bf79fc1` |
| `codex/review-type-scale` | `13c5c7eb45fd5bc994c4f9a8fca9650c7bf79fc1` |
| `codex/review-relay-logo` | `13c5c7eb45fd5bc994c4f9a8fca9650c7bf79fc1` |
| `codex/review-image-tool` | `13c5c7eb45fd5bc994c4f9a8fca9650c7bf79fc1` |
| `codex/review-editor-integration` | `13c5c7eb45fd5bc994c4f9a8fca9650c7bf79fc1` |
| `codex/review-seattle-routes` | `a42c8150d4d0318748d79afed72abc4c45a78623` |
| `codex/review-content` | `d12b03dd64e5820ca375cf63ff8f0ee8d25df6e6` |
| `codex/review-pages` | `19593ef8e1d428fcd79544c0e39d691adf784f29` |
| `codex/review-legacy-retirement` | `5fc71559c57c4bbebf68315a889a2a59ac63d303` |
