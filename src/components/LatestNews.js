import React from "react";
import "./LatestNews.css";

const LatestNews = () => {
    // Hardcoded news data
    const newsItems = [
        {
            id: 1,
            title: "Driving Test Schedule Updated",
            description:
                "New slots are available for December. Book now!",
        },
        {
            id: 2,
            title: "New Course Launch",
            description:
                "Motorcycle Advanced Training starts from January 2025.",
        },
        {
            id: 3,
            title: "Holiday Notice",
            description:
                "The center will remain closed on Christmas Day.",
        },
    ];

    return (
        <section className="latest-news-section">
            <h2>Latest News</h2>
            <ul className="news-list">
                {newsItems.map((news) => (
                    <li key={news.id}>
                        <strong>{news.title}</strong>: {news.description}
                    </li>
                ))}
            </ul>
            <div className="news-footer">
                Stay updated with the latest news and updates.
            </div>
        </section>
    );
};

export default LatestNews;
