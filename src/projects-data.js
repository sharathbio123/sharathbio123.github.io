/**
 * Portfolio projects.
 *
 * To add a project:
 * 1. Put your recorded video + snapshot images in public/projects/<id>/
 * 2. Append an object below
 * 3. Redeploy — the Projects grid and detail page update automatically
 *
 * Fields:
 * - id            URL slug (project.html?id=<id>)
 * - title         Card + detail heading
 * - summary       Short card blurb
 * - description   Longer detail paragraphs (array of strings)
 * - cover         Cover / thumbnail image path
 * - video         Recorded project video path (mp4/webm) or null
 * - snapshots     Image gallery: string paths or { src, caption }
 * - features      Optional bullet list of key features
 * - tags          Short labels on the card
 * - details       Sidebar facts (target, method, tools, highlights)
 * - note          Optional notice shown on the detail page
 * - links         Optional { label, href } buttons
 */
export const projects = [
  {
    id: 'moldockpro',
    title: 'MolDockPro',
    summary:
      'End-to-end molecular docking platform that automates the complete structure-based drug discovery workflow.',
    description: [
      'MolDockPro is an end-to-end molecular docking platform designed to automate the complete structure-based drug discovery workflow through an intuitive and research-focused user interface.',
      'The platform streamlines protein and ligand preparation, binding site detection, molecular docking, pose ranking, and protein–ligand interaction analysis, enabling researchers to perform docking studies efficiently and reproducibly.',
    ],
    cover: '/projects/moldockpro/homepage.png',
    video: null,
    snapshots: [
      {
        src: '/projects/moldockpro/homepage.png',
        caption: 'MolDockPro homepage — Molecular Discovery Suite',
        alt: 'Screenshot of the MolDockPro project homepage',
      },
    ],
    tags: ['Molecular Docking', 'Drug Discovery', 'AlphaFold', 'RDKit'],
    details: {
      target: 'Structure-based drug discovery workflows',
      method: 'End-to-end docking pipeline (prep → pocket → dock → score → analyze)',
      tools: ['Protein prep', 'Ligand prep', 'Docking engine', '3D visualization'],
      highlights: [
        'Automates the full docking workflow in one interface',
        'Supports pocket detection, pose ranking, and interaction analysis',
        'Built for reproducible, research-focused docking studies',
      ],
    },
    note: 'This project is not open source or publicly accessible. Please contact me if you would like to discuss the project or request a demonstration.',
    links: [
      { label: 'Contact for demo', href: 'mailto:sharathbio123@gmail.com?subject=MolDockPro%20demo%20request' },
    ],
  },
];

export function getProjectById(id) {
  return projects.find((project) => project.id === id) || null;
}
