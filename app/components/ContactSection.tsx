"use client";

export default function ContactSection() {
  const contactMeta = [
    {
      label: "Secure Transmission",
      value: "tarakasadarenu@gmail.com",
      href: "mailto:tarakasadarenu@gmail.com",
      tag: "EMAIL_NODE"
    },
    {
      label: "Direct Signal",
      value: "+94 71 255 7625",
      href: "tel:+94712557625",
      tag: "PHONE_COMM"
    },
    {
      label: "Geographic Coordinates",
      value: "Chilaw, Sri Lanka",
      href: "https://google.com",
      tag: "LOCATION_BASE"
    }
  ];

  const networkNodes = [
    {
      platform: "LinkedIn Profile",
      url: "https://www.linkedin.com/in/tharuka-sandarenu-7668b1290/",
      tag: "LINKEDIN"
    },
    {
      platform: "GitHub Repositories",
      url: "https://github.com/sandarenuDT",
      tag: "GITHUB"
    },
    {
      platform: "Production Mirror",
      url: "https://my-portfolio-azure-pi-43.vercel.app/",
      tag: "VERCEL_LIVE"
    }
  ];

  return (
    <div className="border-l-2 border-white/10 pl-6 md:pl-10 grid grid-cols-1 md:grid-cols-2 gap-12">
      
      {/* Left Column: Core Comms Channels */}
      <div className="space-y-6">
        <div>
          <span className="font-mono text-[10px] text-[#00e5ff]/50 tracking-widest block -mb-0.5">
            STATUS_METRICS
          </span>
          <h3 className="text-lg font-bold text-white/90 uppercase tracking-wide">
            Tharuka Sandarenu
          </h3>
          <p className="text-xs font-mono text-white/40 mt-1 uppercase tracking-widest">
            Software Engineer | Cloud & AI Enthusiast
          </p>
        </div>

        <div className="space-y-4 pt-2">
          {contactMeta.map((info) => (
            <div key={info.tag} className="group/meta">
              <span className="font-mono text-[9px] text-white/30 block uppercase tracking-wider">
                {info.tag} {info.label.toUpperCase()}
              </span>
              <a
                href={info.href}
                target={info.tag === "LOCATION_BASE" ? "_blank" : undefined}
                rel={info.tag === "LOCATION_BASE" ? "noopener noreferrer" : undefined}
                className="text-sm font-light text-white/70 group-hover/meta:text-[#00e5ff] transition-colors duration-200 block mt-0.5"
              >
                {info.value}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Verified Networking Channels */}
      <div className="space-y-4 flex flex-col justify-end">
        <span className="font-mono text-[10px] text-[#00e5ff]/50 tracking-widest block uppercase">
           ACCESS_EXTERNAL_NETWORKS
        </span>
        
        <div className="space-y-2.5">
          {networkNodes.map((node) => (
            <a
              key={node.tag}
              href={node.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded bg-white/[0.01] border border-white/5 hover:bg-[#00e5ff]/5 hover:border-[#00e5ff]/30 transition-all duration-300 group/link"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest -mb-0.5">
                  CONNECT_NODE // {node.tag}
                </span>
                <span className="text-xs font-medium text-white/80 group-hover/link:text-white transition-colors">
                  {node.platform}
                </span>
              </div>
              <span className="text-xs font-mono text-white/30 group-hover/link:text-[#00e5ff] transition-colors pr-1">
                ➔
              </span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
