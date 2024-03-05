const allFormDataDto = (data) => {
  const ratings = [
    { id: 1, name: "Poor" },
    { id: 2, name: "Average" },
    { id: 3, name: "Good" },
    { id: 4, name: "Very Good" },
    { id: 5, name: "Excellent" },
  ];

  const formData = data?.map((item, index) => ({
    id: index + 1,
    name: item?.name,
    email: item?.email,
    satisfactionRating: ratings.find(
      (rating) => rating?.id == item?.satisfactionRating
    )?.name,
    effectiveness: ratings.find((rating) => rating?.id == item?.effectiveness)
      ?.name,
    relevance: ratings.find((rating) => rating?.id == item?.relevance)?.name,
    quality: ratings.find((rating) => rating?.id == item?.quality)?.name,
    analytics: ratings.find((rating) => rating?.id == item?.analytics)?.name,
    efficiency: ratings.find((rating) => rating?.id == item?.efficiency)?.name,
    strategy: ratings.find((rating) => rating?.id == item?.strategy)?.name,
    service: ratings.find((rating) => rating?.id == item?.service)?.name,
    specificContent: item?.specificContent,
    additionalData: item?.additionalData,
    competitors: item?.competitors,
    support: item?.support,
    message: item?.message,
    createdAt: item?.createdAt,
  }));

  return {
    formData,
    totalCount: data?.length,
  };
};

module.exports = { allFormDataDto };
