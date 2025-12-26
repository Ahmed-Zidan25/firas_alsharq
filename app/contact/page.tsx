              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">البريد الإلكتروني</h3>
              <a
                href="mailto:shroukamr29072006@gmail.com"
                className="text-primary hover:text-primary-light transition-colors"
              >
                shroukamr29072006@gmail.com
              </a>
            </Card> */}

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">الموقع</h3>
              <p className="text-muted-foreground">حى المروه، شارع حراء، جده، بجوار بنك الراجحي، المملكة العربية السعودية</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">مواعيد العمل</h3>
              <p className="text-muted-foreground text-sm">24 ساعة / 7 أيام بالأسبوع</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      {/* <SocialMedia /> */}

      <Footer />
    </main>
  )
}