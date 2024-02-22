const PrintBillUi = () => {
    return (
        <>
            <div style={{
                backgroundColor: '#e5e7eb',
                display: 'flex',
                gap: '1rem',
                justifyContent: 'space-between',
                padding: '0.5rem 1rem',
                marginBottom: '0.5rem',
                cursor: 'pointer',
                borderRadius: '0.25rem',
                border: '1px solid #ccc',
                backgroundColor: '#fff',
                width:"100%",
                height:"auto",
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                dark: {
                    border: '1px solid #333',
                    backgroundColor: '#1f2937'
                }
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div>
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0WPPVLxOgapbubuTHJNpisy8vD4uwk6xn3wj5mwddVg&s"} alt="product-img" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <p>{"tomatto"}</p>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p>₹ 250</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p>Qty {5}</p>
                </div>
                <div style={{ display: 'flex',alignItems: 'center',justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
                    <p>₹ 300</p>
                </div>
            </div>
        </>
    )
}

export default PrintBillUi
