import React from 'react';

interface HeaderProps {
    title?: string;
}

function Header({ title }: HeaderProps) {
    return (
        <head>
            <title>SalesScout - {title}</title>
            <meta name="title" content={`SalesScout - ${title}`} />
            <meta name="description" content="Too busy to browse RFD? SalesScout uses its own algorithm and filters, so you don't miss out on the best deals." />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://projects.a7.wtf/ss/" />
            <meta property="og:title" content={`SalesScout - ${title}`} />
            <meta property="og:description" content="Too busy to browse RFD? SalesScout uses its own algorithm and filters, so you don't miss out on the best deals." />
            <meta property="og:image" content="https://assets.rfdcontent.com/graphics/rfd/v33.19.4/facebook_thumb_default.png" />
        </head>
    )
}

export default Header;