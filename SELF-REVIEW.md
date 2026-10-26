# Replacement PR self-review

2026-10-26 · PRs #31–46 · findings against the current declared PR bases

This pass reviewed correctness, preservation, and the boundaries between the reconstructed increments. It did not introduce features, change package versions, rewrite copy, or update PR heads. All replacement PRs remain drafts. Existing source-audit caveats remain in place; this was not a new historical-research pass.

## Findings from the initial review

### 1. [P1] The formatter action rejects both workflow names — #34

Locations: [check workflow, line 1](https://github.com/connectionsmuseum/public-web/blob/a219c540cee72516a3b4fce099dbf1472a208972/.github/workflows/prettier-check.yml#L1), [write workflow, line 1](https://github.com/connectionsmuseum/public-web/blob/a219c540cee72516a3b4fce099dbf1472a208972/.github/workflows/prettier-write.yml#L1).

Both workflows invoke `autofix-ci/action@v1`, but their top-level names are `check` and `autofix`. The action requires `GITHUB_WORKFLOW` to equal `autofix.ci` and throws before checking whether there are changes. Its [v1 implementation](https://github.com/autofix-ci/action/blob/v1/index.ts#L18-L20) verifies this explicitly.

After this PR lands, even a clean PR to `trunk` will pass Prettier and then fail at the added action. The write workflow also fails instead of submitting its formatting changes. The current draft has no GitHub check run because its base is the toolchain branch and its check trigger targets `trunk`; the existing green checks do not exercise this change.

**Narrow correction:** remove the redundant autofix action from the read-only `--check` workflow, and give the write workflow the action's required name. Keep any further formatter-policy decisions in this PR rather than combining them with another review.

### 2. [P2] The extracted visit page does not show an active closure — #37

Location: [visit page, lines 18–21](https://github.com/connectionsmuseum/public-web/blob/729c447828d601bb97525a5fec9b7806878b5ac8/src/pages/seattle/visiting-info.astro#L18-L21).

The new page imports `ClosureAnnouncement` but never renders it. With `seattleVisit.closureNotice` set, the home page and Seattle overview display the closure while the detailed visit page does not. That page still advertises normal visiting hours.

**Reproduction:** built an isolated export of #37 with a temporary closure message. The message appeared in `index.html` and `seattle.html`, but was absent from `seattle/visiting-info.html`.

**Narrow correction:** render the shared closure component immediately after the visit-page heading when creating the route. #38 already contains that line, so the correction belongs earlier in #37; the later content change should retain it once. The combined reference passes the closure test because it contains #38's later correction.

### 3. [P2] `VisitInfo` does not render its promised fragment ID — #35

Location: [VisitInfo.astro, line 54](https://github.com/connectionsmuseum/public-web/blob/b76c340bc336b6ae28c087165b3426d8eb9b1a18/src/components/content/VisitInfo.astro#L54).

The required `id` prop is documented as the article's stable fragment identifier. It is used to create the heading ID, but the article itself has no ID. With `id="seattle-visit"`, the output contains `seattle-visit-heading` and no `seattle-visit` target. Links using the documented fragment cannot reach the article.

**Reproduction:** built an isolated #35 fixture rendering `VisitInfo` with that ID. The requested fragment target was absent; the generated heading target was present.

**Narrow correction:** add `id={id}` to the existing `<article>`. No API or styling change is needed.

### 4. [P3] The migration README describes later routes — #36

Location: [README.md, lines 8–14](https://github.com/connectionsmuseum/public-web/blob/6a256b6158dab4a59b0fe8fbdaa9b657621237de/README.md#L8-L14).

The README says the migration builds Seattle exhibits and library pages and lists their URLs. Those routes first appear in #37. A fresh #36 build generates seven routes and neither of those two files. The text also lists port 4001 without giving the explicit preview-port command at this stage; the Nova task that supplies that port is a separate later PR.

**Narrow correction:** list only #36's routes and document `npm run preview -- --port 4001` for those example URLs. Add the new route descriptions with #37. No runtime configuration change is needed.

## Coverage

“No additional finding” means no further actionable defect was found in this bounded pass; it is not a merge approval.

| PR                           | Result                                                                                                                                          |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| #31 Node/npm                 | No additional finding. Manifest/lock changes and installer commands remain focused.                                                             |
| #32 Astro setup              | No additional finding. The initial build intentionally has no migrated production pages.                                                        |
| #33 Build CI                 | No additional finding. Publication remains separate.                                                                                            |
| #34 Formatter automation     | Fix finding 1 before marking ready.                                                                                                             |
| #35 Components/data          | Fix finding 3 before marking ready.                                                                                                             |
| #36 Migration                | Correct the documentation in finding 4.                                                                                                         |
| #37 Seattle routes           | Fix finding 2 before marking ready.                                                                                                             |
| #38 Editorial content        | No additional finding. Its later closure wiring masks finding 2 in the assembled site. Existing unresolved policy/source notes remain comments. |
| #39 Keyboard navigation      | No additional finding.                                                                                                                          |
| #40 Font delivery            | No additional finding.                                                                                                                          |
| #41 Type/spacing scale       | No additional finding.                                                                                                                          |
| #42 Relay logo               | No additional finding.                                                                                                                          |
| #43 Optional image generator | No additional finding. The optional tool remains preserved.                                                                                     |
| #44 Nova tasks               | No additional finding.                                                                                                                          |
| #45 Pages publication        | No additional finding against its declared prerequisite base. Retargeted route/UI integrations still need the documented Pages verification.    |
| #46 Legacy retirement        | No additional finding. Keep the existing successful-deployment merge condition.                                                                 |

## Verification performed for this review

- Read the 16 PR comparisons against their declared bases and checked the current remote heads and CI state.
- Reviewed shared component contracts, data consumers, configuration/workflows, image generation, page/link changes, and the ordered editorial commits.
- Built isolated snapshots of #35, #36, and #37 for the targeted reproductions above; all three builds completed successfully.
- Confirmed the migration snapshot contains seven generated routes and the route-organization snapshot contains ten.
- Checked existing local fragment references in the two intermediate site builds; no broken existing fragment targets were found. The `VisitInfo` issue concerns the fragment promised by its component API.
- Verified the exact `autofix-ci/action@v1` guard from its published source, rather than inferring its requirements from the action name.
- Confirmed the tracked integration workspace still matches the preserved reference. Temporary fixtures and changed test data are confined to `/private/tmp/public-web-self-review-20261026/`.

## Corrections and follow-up verification

All four findings are resolved in their owning PRs:

- #34: `8247a4e` removes the autofix action from the read-only check and names the write workflow `autofix.ci`.
- #35: `13c5c7e` renders the existing `VisitInfo` ID prop on the article.
- #36: `a42c815` documents only the seven migrated routes and gives an explicit preview-port command.
- #37: `d12b03d` renders the shared closure notice and introduces documentation for the three added routes.

Affected descendants have been restacked without adding unrelated changes. The later content PR retains the closure component exactly once. Workflow YAML/action wiring and changed-file formatting pass. Fresh isolated builds confirm the component fragment target, seven migration routes, ten extracted routes, and an active closure on all three entry pages followed by its removal after reset.

The corrected assembled site passes root and Pages builds: 13 pages and 207 verified local URLs, with no production demo route. Its tracked tree matches the corrected reference exactly. Compared with the original preserved endpoint, only the two formatter workflows, the `VisitInfo` article ID, and the explicit README preview command differ. The earlier closure correction makes no further change to the finished site because the later content PR already contained it.

Original source tags and before-fix branch heads remain preserved. All PRs remain drafts; #46 retains its successful-deployment condition. No package versions, visitor copy, runtime configuration, or deployment settings were changed by these fixes.
