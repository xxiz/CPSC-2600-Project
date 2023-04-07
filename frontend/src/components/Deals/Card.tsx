import { Icon } from "@iconify/react";
import React from "react";
import { IDeal } from "../../types";

function Card({ deals }: { deals: IDeal[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {deals.map((deal) => (
        <a
          key={deal.title}
          className="p-4 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
          href={deal.url}
        >
          <h3 className="mb-2 text-lg font-semibold">
            {deal.title.length > 50
              ? deal.title.substring(0, 50) + `...`
              : deal.title}
          </h3>
          <p className="mb-2 text-gray-600">{deal.description}</p>
          <p className="mb-1 text-sm text-gray-500">
            {new Intl.DateTimeFormat("default", {
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
              timeZoneName: "short",
            }).format(new Date(deal.last_updated))}
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-1">
              <Icon className="w-4 h-4" icon="bxs:upvote" />
            </span>
            <p>{deal.votes} votes</p>
            <span className="mx-2">•</span>
            <span className="mt-0.5 mr-1">
              <Icon className="w-5 h-5" icon="mdi:chat-processing-outline" />
            </span>
            <p>{deal.replies} replies</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Card;
